/* ──────────────────────────────────────────────
   services/contactService.ts
────────────────────────────────────────────── */
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
    const { error } = await supabase.rpc('submit_contact', {
      _name:    formData.name,
      _email:   formData.email,
      _company: formData.company || null,
      _service: formData.service || null,
      _message: formData.message
    });

    if (error) {
      console.error('Error submitting contact form:', error);
      throw new Error('Failed to submit contact form. Please try again.');
    }
  }
};
