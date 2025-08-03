import { supabase } from '../lib/supabase';
import type { Client } from '../lib/supabase';

export const clientService = {
  /**
   * Create a new client using RPC with password hashing
   */
  async createClient(clientData: {
    name: string;
    email: string;
    username: string;
    password: string;
  }): Promise<Client> {
    console.log('Creating client with data:', { ...clientData, password: '[HIDDEN]' });

    try {
      // Call RPC function to create client (handles uniqueness + hashing)
      const { data, error } = await supabase.rpc('create_client_with_password', {
        client_name: clientData.name,
        client_email: clientData.email,
        client_username: clientData.username,
        client_password: clientData.password
      });

      if (error) {
        console.error('Error creating client:', error);
        throw new Error(error.message || 'Failed to create client');
      }

      if (!data?.success) {
        throw new Error(data?.message || 'Failed to create client');
      }

      console.log('Client created successfully:', data.client);
      return data.client as Client;
    } catch (err) {
      console.error('Error in createClient:', err);
      if (err instanceof Error) throw new Error(err.message);
      throw new Error('Failed to create client. Please check your connection and try again.');
    }
  },

  /**
   * Login client using RPC
   */
  async login(email: string, password: string): Promise<{ success: boolean; message: string; client?: Client }> {
    try {
      const { data, error } = await supabase.rpc('verify_client_credentials', {
        client_email: email,
        client_password: password
      });

      if (error) {
        console.error('Error verifying client credentials:', error);
        throw new Error('Login failed');
      }

      return data;
    } catch (err) {
      console.error('Error in client login:', err);
      throw new Error(err instanceof Error ? err.message : 'Login failed');
    }
  },

  /**
   * Get all clients
   */
  async getAllClients(): Promise<Client[]> {
    const { data, error } = await supabase
      .from('clients')
      .select('id, name, email, username, created_at')
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data || [];
  },

  /**
   * Get client by ID (avoids 406 error by using maybeSingle)
   */
  async getClientById(id: string): Promise<Client | null> {
    const { data, error } = await supabase
  .from('clients')
  .select('*')
  .eq('id', id)
  .maybeSingle(); // safer than .single()


    if (error) {
      console.error('Error fetching client by ID:', error);
      return null;
    }
    return data;
  },

  /**
   * Update client
   */
  async updateClient(id: string, updates: Partial<Client>): Promise<Client> {
    const { data, error } = await supabase
      .from('clients')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  /**
   * Delete client
   */
  async deleteClient(id: string): Promise<void> {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);

    if (error) throw new Error(error.message);
  },

  /**
   * Reset client password using RPC
   */
  async resetClientPassword(id: string, newPassword: string): Promise<void> {
    const { error } = await supabase.rpc('reset_client_password', {
      client_id: id,
      new_password: newPassword
    });

    if (error) throw new Error(error.message);
  }
};
