import { supabase } from '../lib/supabase';


export const loginClient = async (username: string, password: string) => {
  try {
    // Use RPC function to verify client credentials
    const { data, error } = await supabase.rpc('verify_client_credentials', {
      client_username: username,
      client_password: password
    });

    if (error) {
      console.error('Error verifying client credentials:', error);
      throw new Error('Invalid credentials');
    }

    if (!data.success) {
      throw new Error('Invalid credentials');
    }

    const client = data.client;

    // Create session (you might want to use JWT or Supabase auth here)
    localStorage.setItem('clientSession', JSON.stringify({
      id: client.id,
      name: client.name,
      email: client.email,
      username: client.username,
      loginTime: new Date().toISOString()
    }));

    return client;
  } catch (error) {
    console.error('Error in loginClient:', error);
    throw error;
  }
};


export const getClientSession = () => {
  try {
    const sessionData = localStorage.getItem('clientSession');
    return sessionData ? JSON.parse(sessionData) : null;
  } catch (error) {
    console.error('Error getting client session:', error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('clientSession');
};