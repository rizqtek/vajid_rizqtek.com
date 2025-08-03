import { supabase } from '../lib/supabase';

export interface Admin {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface AdminLoginResponse {
  success: boolean;
  message: string;
  admin?: Admin;
}

export const adminService = {
  /**
   * Login admin using Supabase RPC
   */
  async login(email: string, password: string): Promise<AdminLoginResponse> {
    try {
      // Call Postgres function verify_admin_credentials
      const { data, error } = await supabase.rpc('verify_admin_credentials', {
        admin_email: email,
        admin_password: password
      });

      // Handle Supabase error
      if (error) {
        console.error('Error verifying credentials:', error);
        return { success: false, message: 'Login failed. Please try again.' };
      }

      // Ensure response structure
      if (!data || typeof data !== 'object') {
        return { success: false, message: 'Invalid response from server' };
      }

      // If the RPC is correctly structured (with success, message, admin)
      if ('success' in data && data.success === true) {
        return {
          success: true,
          message: data.message || 'Login successful',
          admin: data.admin
        };
      }

      // If RPC returned success: false or null (invalid credentials)
      return {
        success: false,
        message: (data as any)?.message || 'Invalid email or password'
      };

    } catch (err) {
      console.error('Error in admin login:', err);
      return { success: false, message: 'Unexpected error occurred' };
    }
  },

  /**
   * Get admin profile by ID
   */
  async getProfile(adminId: string): Promise<Admin | null> {
    try {
      const { data, error } = await supabase
        .from('admins')
        .select('id, email, name, created_at')
        .eq('id', adminId)
        .single();

      if (error) {
        console.error('Error getting admin profile:', error);
        return null;
      }

      return data;
    } catch (err) {
      console.error('Error in getProfile:', err);
      return null;
    }
  }
};
