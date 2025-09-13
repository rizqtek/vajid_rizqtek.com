// Initialize application on startup
import { supabase } from '../lib/supabase';

export interface InitializationResult {
  success: boolean;
  message: string;
  adminCreated?: boolean;
}

export const initializeApplication = async (): Promise<InitializationResult> => {
  try {
    console.log('🚀 Initializing RizqTek Application...');

    // Check environment variables
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    const adminName = import.meta.env.VITE_ADMIN_NAME || 'RizqTek Admin';

    if (!adminEmail || !adminPassword) {
      console.error('❌ Missing admin credentials in environment variables');
      return {
        success: false,
        message: 'Missing admin credentials in environment variables'
      };
    }

    console.log('📧 Admin Email:', adminEmail);
    console.log('👤 Admin Name:', adminName);

    // Create admin if not exists (idempotent)
    const { data, error } = await supabase.rpc('create_admin_if_not_exists', {
      admin_email: adminEmail,
      admin_password: adminPassword,
      admin_name: adminName
    });

    if (error) {
      console.error('❌ Admin creation/update failed:', error.message);
      return {
        success: false,
        message: `Admin setup failed: ${error.message}`
      };
    }

    const result = data as { success: boolean; message: string; admin: unknown };
    console.log('✅ Admin ensure/create result:', result?.message || 'done');

    console.log('🎉 Application initialized successfully!');
    
    return {
      success: true,
      message: 'Application initialized successfully',
      adminCreated: true
    };

  } catch (error) {
    console.error('❌ Application initialization failed:', error);
    return {
      success: false,
      message: `Initialization failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
};

// Auto-initialize when module is imported
let initializationPromise: Promise<InitializationResult> | null = null;

export const getInitializationStatus = (): Promise<InitializationResult> => {
  if (!initializationPromise) {
    initializationPromise = initializeApplication();
  }
  return initializationPromise;
};