/*
  # Add Client Management Functions

  1. Functions
    - Function to create client with hashed password
    - Function to verify client credentials
    - Function to reset client password
*/

-- Function to create client with hashed password
create or replace function create_client_with_password(
  client_name text,
  client_email text,
  client_username text,
  client_password text
)
returns json
language plpgsql
security definer
as $$
declare
  existing_client clients%rowtype;
  new_client clients%rowtype;
  password_hash text;
begin
  -- Check if username or email already exists
  select * into existing_client
  from clients
  where username = client_username
     or email = client_email;

  if existing_client.id is not null then
    if existing_client.username = client_username then
      return json_build_object(
        'success', false,
        'message', 'Username already exists. Please choose a different username.'
      );
    else
      return json_build_object(
        'success', false,
        'message', 'Email already exists. Please use a different email address.'
      );
    end if;
  end if;

  -- Hash password using bcrypt
  password_hash := crypt(client_password, gen_salt('bf', 10));

  -- Create new client
  insert into clients (name, email, username, hashed_password)
  values (client_name, client_email, client_username, password_hash)
  returning * into new_client;

  return json_build_object(
    'success', true,
    'message', 'Client created successfully',
    'client', json_build_object(
      'id', new_client.id,
      'name', new_client.name,
      'email', new_client.email,
      'username', new_client.username,
      'created_at', new_client.created_at
    )
  );
end;
$$;



create or replace function verify_client_credentials(
  client_email text,
  client_password text
)
returns json
language plpgsql
as $$
declare
  client_record record;
begin
  -- Fetch client by email
  select * into client_record
  from clients
  where email = client_email;

  -- If not found or password mismatch
  if client_record is null
     or crypt(client_password, client_record.hashed_password) <> client_record.hashed_password then
    return json_build_object(
      'success', false,
      'message', 'Invalid email or password',
      'client', null
    );
  end if;

  -- Return client profile
  return json_build_object(
    'success', true,
    'message', 'Login successful',
    'client', json_build_object(
      'id', client_record.id,
      'name', client_record.name,
      'email', client_record.email,
      'username', client_record.username,
      'created_at', client_record.created_at
    )
  );
end;
$$;


create or replace function get_client_profile(client_id uuid)
returns json
language plpgsql
as $$
declare
  client_json json;
begin
  -- Fetch client and convert to JSON
  select to_jsonb(c) into client_json
  from (
    select id, name, email, username, created_at
    from clients
    where id = client_id
  ) c;

  if client_json is null then
    return json_build_object('success', false, 'client', null);
  else
    return json_build_object('success', true, 'client', client_json);
  end if;
end;
$$;

create or replace function reset_client_password(
  client_id uuid,
  new_password text
)
returns json
language plpgsql
security definer
as $$
declare
  password_hash text;
begin
  -- Hash new password
  password_hash := crypt(new_password, gen_salt('bf', 10));

  -- Update password
  update clients
  set hashed_password = password_hash
  where id = client_id;

  return json_build_object(
    'success', true,
    'message', 'Password reset successfully'
  );
end;
$$;

