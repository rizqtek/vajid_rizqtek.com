import { supabase } from '../lib/supabase';
import type { Project } from '../lib/supabase';

export const projectService = {
  // Create a new project
  async createProject(projectData: {
    client_id: string;
    title: string;
    description?: string;
    start_date?: string;
    due_date?: string;
    status?: 'In Progress' | 'Completed' | 'On Hold';
  }): Promise<Project> {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([projectData])
        .select(`
          *,
          client:clients(*),
          invoice:invoices!projects_invoice_id_fkey(*)
        `)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project. Please try again.');
    }
  },

  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        client:clients(*),
        invoice:invoices!projects_invoice_id_fkey(*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get projects by client ID
  async getProjectsByClientId(clientId: string): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        client:clients(*),
        invoice:invoices!projects_invoice_id_fkey(*)
      `)
      .eq('client_id', clientId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get project by ID
  async getProjectById(id: string): Promise<Project | null> {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        client:clients(*),
        invoice:invoices!projects_invoice_id_fkey(*)
      `)
      .eq('id', id)
      .single();

    if (error) return null;
    return data;
  },

  // Update project
  async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        client:clients(*),
        invoice:invoices!projects_invoice_id_fkey(*)
      `)
      .single();

    if (error) throw error;
    return data;
  },

  // Delete project
  async deleteProject(id: string): Promise<void> {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Upload file to project
  async uploadProjectFile(projectId: string, file: File): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${projectId}/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('project-files')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('project-files')
      .getPublicUrl(fileName);

    // Add file URL to project
    const project = await this.getProjectById(projectId);
    if (project) {
      const updatedFileUrls = [...(project.file_urls || []), data.publicUrl];
      await this.updateProject(projectId, { file_urls: updatedFileUrls });
    }

    return data.publicUrl;
  },

  // Remove file from project
  async removeProjectFile(projectId: string, fileUrl: string): Promise<void> {
    const project = await this.getProjectById(projectId);
    if (project) {
      const updatedFileUrls = project.file_urls.filter(url => url !== fileUrl);
      await this.updateProject(projectId, { file_urls: updatedFileUrls });
    }

    // Extract file path from URL and delete from storage
    const fileName = fileUrl.split('/').pop();
    if (fileName) {
      await supabase.storage
        .from('project-files')
        .remove([`${projectId}/${fileName}`]);
    }
  }
};