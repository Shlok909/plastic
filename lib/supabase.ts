import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SustainabilityRequest = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message?: string;
  created_at?: string;
};

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
};
