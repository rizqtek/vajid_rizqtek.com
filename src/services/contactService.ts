import { supabase } from '../lib/supabase';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export const contactService = {
  async submit(formData: ContactFormData) {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          project_type: formData.service || null,
          message: formData.message
        }])
        .select()
        .single();

      if (error) {
        console.error('Error submitting contact form:', error);
        throw new Error('Failed to submit contact form. Please try again.');
      }

      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
        data
      };
    } catch (error) {
      console.error('Contact service error:', error);
      throw error;
    }
  }
};