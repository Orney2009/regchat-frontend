import { createClient } from "@supabase/supabase-js";
import { SUPABASE_CONFIG, hasSupabaseConfig } from "./env";

export const supabase = hasSupabaseConfig
  ? createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
  : null;
