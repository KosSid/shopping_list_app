import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = import.meta.env.VITE_PROJECT_SUPABASE_URL;
const anonApiKey: string = import.meta.env.VITE_PROJECT_ANON_API_KEY;

if (!supabaseUrl || !anonApiKey) {
  throw new Error('Supabase URL or Key is missing!');
}

const supabase = createClient(supabaseUrl, anonApiKey);
export default supabase;
