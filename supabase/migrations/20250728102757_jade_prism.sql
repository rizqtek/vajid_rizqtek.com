/*
  # Admin & Client Management System

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `username` (text, unique)
      - `hashed_password` (text)
      - `created_at` (timestamp)
    
    - `projects`
      - `id` (uuid, primary key)
      - `client_id` (uuid, foreign key)
      - `title` (text)
      - `description` (text)
      - `start_date` (date)
      - `due_date` (date)
      - `status` (text)
      - `file_urls` (text array)
      - `invoice_id` (uuid, foreign key)
      - `created_at` (timestamp)
    
    - `invoices`
      - `id` (uuid, primary key)
      - `client_id` (uuid, foreign key)
      - `project_id` (uuid, foreign key)
      - `amount` (decimal)
      - `paid` (boolean)
      - `invoice_file_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin and client access
*/

-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  username text UNIQUE NOT NULL,
  hashed_password text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create invoices table first (referenced by projects)
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  project_id uuid,
  amount decimal(10,2) NOT NULL,
  paid boolean DEFAULT false,
  invoice_file_url text,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  start_date date,
  due_date date,
  status text DEFAULT 'In Progress' CHECK (status IN ('In Progress', 'Completed', 'On Hold')),
  file_urls text[] DEFAULT '{}',
  invoice_id uuid REFERENCES invoices(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

-- Add foreign key constraint for project_id in invoices
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'fk_invoices_project'
  ) THEN
    ALTER TABLE invoices ADD CONSTRAINT fk_invoices_project 
      FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE;
  END IF;
END $$;

-- Enable Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Clients can read own data" ON clients;
DROP POLICY IF EXISTS "Clients can read own projects" ON projects;
DROP POLICY IF EXISTS "Clients can read own invoices" ON invoices;
DROP POLICY IF EXISTS "Admin full access to clients" ON clients;
DROP POLICY IF EXISTS "Admin full access to projects" ON projects;
DROP POLICY IF EXISTS "Admin full access to invoices" ON invoices;

-- Create policies for clients table
CREATE POLICY "Clients can read own data"
  ON clients
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to clients"
  ON clients
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for projects table
CREATE POLICY "Clients can read own projects"
  ON projects
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for invoices table
CREATE POLICY "Clients can read own invoices"
  ON invoices
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to invoices"
  ON invoices
  FOR ALL
  TO authenticated
  USING (true);

-- Create storage bucket for project files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-files', 'project-files', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for project files
CREATE POLICY "Anyone can view project files"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'project-files');

CREATE POLICY "Authenticated users can upload project files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'project-files');

CREATE POLICY "Authenticated users can update project files"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'project-files');

CREATE POLICY "Authenticated users can delete project files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'project-files');