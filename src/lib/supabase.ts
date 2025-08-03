import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate URL format
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

if (!supabaseUrl || !supabaseAnonKey || !isValidUrl(supabaseUrl)) {
  console.error('Missing Supabase environment variables:', {
    url: !!supabaseUrl,
    key: !!supabaseAnonKey,
    validUrl: supabaseUrl ? isValidUrl(supabaseUrl) : false
  });
  throw new Error('Invalid or missing Supabase configuration. Please check your .env file and ensure VITE_SUPABASE_URL is a valid URL.');
}

console.log('Supabase client initialized with URL:', supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Client {
  id: string;
  name: string;
  email: string;
  username: string;
  hashed_password: string;
  created_at: string;
}

export interface Project {
  id: string;
  client_id: string;
  title: string;
  description?: string;
  start_date?: string;
  due_date?: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  file_urls: string[];
  invoice_id?: string;
  created_at: string;
  client?: Client;
  invoice?: Invoice;
}

export interface Invoice {
  id: string;
  client_id: string;
  project_id: string;
  amount: number;
  paid: boolean;
  invoice_file_url?: string;
  created_at: string;
  client?: Client;
  project?: Project;
}

async function checkTokenClaims() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error getting session:', error);
    return;
  }

  const token = data.session?.access_token;

  if (!token) {
    console.warn('No access token found. Are you logged in?');
    return;
  }

  console.log('Access Token:', token);

  try {
    const [, payload] = token.split('.');
    const decodedClaims = JSON.parse(atob(payload));
    console.log('Decoded JWT Claims:', decodedClaims);
  } catch (err) {
    console.error('Error decoding token:', err);
  }
}

checkTokenClaims();
