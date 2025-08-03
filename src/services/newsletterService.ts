import { supabase } from '../lib/supabase';

export const newsletterService = {
  subscribe: async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }])
        .select();

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          throw new Error('This email is already subscribed to our newsletter.');
        }
        throw new Error('Failed to subscribe. Please try again.');
      }

      return {
        success: true,
        message: 'Successfully subscribed to our newsletter! Thank you for joining us.',
        data
      };
    } catch (error: any) {
      throw new Error(error.message || 'Failed to subscribe. Please try again.');
    }
  }
};