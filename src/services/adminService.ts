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
      // 1) Try RPC verify_admin_credentials (preferred)
      const { data, error } = await supabase.rpc('verify_admin_credentials', { email, password });

      // Handle Supabase error
      if (error) {
        const msg = (error as any)?.message?.toLowerCase?.() || '';
        // If RPC missing (404) or not found, attempt fallback(s)
        if (msg.includes('not found') || msg.includes('does not exist') || msg.includes('404')) {
          return await this.loginFallback(email, password);
        }
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

  async loginFallback(email: string, password: string): Promise<AdminLoginResponse> {
    try {
      // 2) Try alternate RPC signature if your DB uses column "password" instead of "password_hash"
      const alt = await supabase.rpc('verify_admin_credentials', { email, password });
      if (!alt.error && alt.data && (alt.data as any).success) {
        return { success: true, message: alt.data.message || 'Login successful', admin: (alt.data as any).admin };
      }
    } catch (e) {
      // ignore and try API fallback
    }

    try {
      // 3) Fallback to API backend if provided
      const base = (import.meta as any).env?.VITE_SERVER_URL as string | undefined;
      if (!base) return { success: false, message: 'Admin login service unavailable (no RPC/API). Please contact support.' };

      const res = await fetch(`${base.replace(/\/$/, '')}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const json = await res.json();
      if (!res.ok) {
        return { success: false, message: json?.message || 'Invalid credentials' };
      }
      return {
        success: true,
        message: json?.message || 'Login successful',
        admin: {
          id: json?.admin?.id,
          email: json?.admin?.email,
          name: json?.admin?.name,
          created_at: new Date().toISOString()
        }
      };
    } catch (e) {
      console.error('Admin API fallback failed:', e);
      return { success: false, message: 'Login service temporarily unavailable.' };
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
