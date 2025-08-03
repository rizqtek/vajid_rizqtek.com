/*
  # Admin Management Functions

  1. Functions
    - `create_or_update_admin` - Creates or updates admin user with hashed password
    - `verify_admin_credentials` - Verifies admin login credentials
    - `get_admin_by_email` - Gets admin user by email

  2. Security
    - Password hashing using pgcrypto extension
    - Secure credential verification
    - Admin table with RLS enabled
*/

-- Enable pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create or update admin function
CREATE OR REPLACE FUNCTION create_or_update_admin(
  admin_email TEXT,
  admin_password TEXT,
  admin_name TEXT DEFAULT 'Admin'
)
RETURNS JSON AS $$
DECLARE
  existing_admin_id UUID;
  hashed_password TEXT;
  result JSON;
BEGIN
  -- Hash the password
  hashed_password := crypt(admin_password, gen_salt('bf', 12));
  
  -- Check if admin exists
  SELECT id INTO existing_admin_id
  FROM admins
  WHERE email = admin_email;
  
  IF existing_admin_id IS NOT NULL THEN
    -- Update existing admin
    UPDATE admins
    SET 
      password_hash = hashed_password,
      name = admin_name,
      created_at = COALESCE(created_at, now())
    WHERE id = existing_admin_id;
    
    result := json_build_object(
      'success', true,
      'message', 'Admin updated successfully',
      'created', false,
      'admin_id', existing_admin_id
    );
  ELSE
    -- Create new admin
    INSERT INTO admins (email, password_hash, name)
    VALUES (admin_email, hashed_password, admin_name)
    RETURNING id INTO existing_admin_id;
    
    result := json_build_object(
      'success', true,
      'message', 'Admin created successfully',
      'created', true,
      'admin_id', existing_admin_id
    );
  END IF;
  
  RETURN result;
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'message', 'Failed to create/update admin: ' || SQLERRM,
      'created', false
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Verify admin credentials function
create or replace function verify_admin_credentials(admin_email text, admin_password text)
returns json as $$
declare
  admin_record record;
begin
  -- Fetch the admin by email
  select * into admin_record
  from admins
  where email = admin_email;

  -- If no admin found
  if admin_record is null then
    return json_build_object(
      'success', false,
      'message', 'Invalid email or password',
      'admin', null
    );
  end if;

  -- Compare bcrypt hash
  if crypt(admin_password, admin_record.password_hash) = admin_record.password_hash then
    return json_build_object(
      'success', true,
      'message', 'Login successful',
      'admin', json_build_object(
        'id', admin_record.id,
        'email', admin_record.email,
        'name', admin_record.name,
        'created_at', admin_record.created_at
      )
    );
  else
    return json_build_object(
      'success', false,
      'message', 'Invalid email or password',
      'admin', null
    );
  end if;
end;
$$ language plpgsql;



-- Get admin by email function
CREATE OR REPLACE FUNCTION get_admin_by_email(admin_email TEXT)
RETURNS JSON AS $$
DECLARE
  admin_record RECORD;
  result JSON;
BEGIN
  SELECT id, email, name, created_at
  INTO admin_record
  FROM admins
  WHERE email = admin_email;
  
  IF admin_record.id IS NOT NULL THEN
    result := json_build_object(
      'success', true,
      'admin', json_build_object(
        'id', admin_record.id,
        'email', admin_record.email,
        'name', admin_record.name,
        'created_at', admin_record.created_at
      )
    );
  ELSE
    result := json_build_object(
      'success', false,
      'admin', null
    );
  END IF;
  
  RETURN result;
EXCEPTION
  WHEN OTHERS THEN
    RETURN json_build_object(
      'success', false,
      'admin', null
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;