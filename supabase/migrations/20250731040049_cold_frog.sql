/*
  # Create Admin Table and Authentication System

  1. New Tables
    - `admins`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `password_hash` (text)
      - `name` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `admins` table
    - Add policy for admin authentication

  3. Functions
    - Function to create admin from environment variables
    - Function to verify admin credentials
*/

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  name text NOT NULL DEFAULT 'Admin',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access
CREATE POLICY "Admins can access own data"
  ON admins
  FOR ALL
  TO authenticated
  USING (true);

-- Function to create admin if not exists
CREATE OR REPLACE FUNCTION create_admin_if_not_exists(
  admin_email text,
  admin_password text,
  admin_name text DEFAULT 'Admin'
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  existing_admin admins%ROWTYPE;
  new_admin admins%ROWTYPE;
  password_hash text;
BEGIN
  -- Check if admin already exists
  SELECT * INTO existing_admin FROM admins WHERE email = admin_email;
  
  IF existing_admin.id IS NOT NULL THEN
    RETURN json_build_object(
      'success', true,
      'message', 'Admin already exists',
      'admin', json_build_object(
        'id', existing_admin.id,
        'email', existing_admin.email,
        'name', existing_admin.name
      )
    );
  END IF;
  
  -- Hash password using crypt
  password_hash := crypt(admin_password, gen_salt('bf', 10));
  
  -- Create new admin
  INSERT INTO admins (email, password_hash, name)
  VALUES (admin_email, password_hash, admin_name)
  RETURNING * INTO new_admin;
  
  RETURN json_build_object(
    'success', true,
    'message', 'Admin created successfully',
    'admin', json_build_object(
      'id', new_admin.id,
      'email', new_admin.email,
      'name', new_admin.name
    )
  );
END;
$$;

-- Function to verify admin credentials
create or replace function verify_admin_credentials(email text, password text)
returns json as $$
declare
  admin_record record;
begin
  select * into admin_record from admins where admins.email = email;

  if admin_record is null then
    return json_build_object('success', false, 'message', 'Invalid email or password', 'admin', null);
  end if;

  if crypt(password, admin_record.password_hash) <> admin_record.password_hash then
    return json_build_object('success', false, 'message', 'Invalid email or password', 'admin', null);
  end if;

  return json_build_object(
    'success', true,
    'message', 'Login successful',
    'admin', json_build_object(
      'id', admin_record.id,
      'name', admin_record.name,
      'email', admin_record.email,
      'created_at', admin_record.created_at
    )
  );
end;
$$ language plpgsql;
