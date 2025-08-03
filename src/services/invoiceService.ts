import { supabase } from '../lib/supabase';
import type { Invoice } from '../lib/supabase';

export const invoiceService = {
  // Create a new invoice
  async createInvoice(invoiceData: {
    client_id: string;
    project_id: string;
    amount: number;
    paid?: boolean;
  }): Promise<Invoice> {
    const { data, error } = await supabase
      .from('invoices')
      .insert([invoiceData])
      .select(`
        *,
        client:clients(*),
        project:projects!fk_invoices_project(*)
      `)
      .single();

    if (error) throw error;
    return data;
  },

  // Get all invoices
  async getAllInvoices(): Promise<Invoice[]> {
    const { data, error } = await supabase
      .from('invoices')
      .select(`
        *,
        client:clients(*),
        project:projects!fk_invoices_project(*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get invoices by client ID
  async getInvoicesByClientId(clientId: string): Promise<Invoice[]> {
    const { data, error } = await supabase
      .from('invoices')
      .select(`
        *,
        client:clients(*),
        project:projects!fk_invoices_project(*)
      `)
      .eq('client_id', clientId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get invoice by ID
  async getInvoiceById(id: string): Promise<Invoice | null> {
    const { data, error } = await supabase
      .from('invoices')
      .select(`
        *,
        client:clients(*),
        project:projects!fk_invoices_project(*)
      `)
      .eq('id', id)
      .single();

    if (error) return null;
    return data;
  },

  // Update invoice
  async updateInvoice(id: string, updates: Partial<Invoice>): Promise<Invoice> {
    const { data, error } = await supabase
      .from('invoices')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        client:clients(*),
        project:projects!fk_invoices_project(*)
      `)
      .single();

    if (error) throw error;
    return data;
  },

  // Delete invoice
  async deleteInvoice(id: string): Promise<void> {
    const { error } = await supabase
      .from('invoices')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Upload invoice file
  async uploadInvoiceFile(invoiceId: string, file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `invoices/${invoiceId}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('project-files')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('project-files')
      .getPublicUrl(fileName);

    // Update invoice with file URL
    await this.updateInvoice(invoiceId, { invoice_file_url: data.publicUrl });

    return data.publicUrl;
  },

  // Mark invoice as paid/unpaid
  async toggleInvoicePayment(id: string): Promise<Invoice> {
    const invoice = await this.getInvoiceById(id);
    if (!invoice) throw new Error('Invoice not found');

    return await this.updateInvoice(id, { paid: !invoice.paid });
  }
};