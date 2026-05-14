// Environment configuration with fallbacks
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1",
};

export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || "",
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
};

export const hasSupabaseConfig = Boolean(
  SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey,
);

export const CHAT_CONFIG = {
  country: import.meta.env.VITE_CHAT_COUNTRY || "BEN",
  domain: import.meta.env.VITE_CHAT_DOMAIN || "urbanisme",
  threshold: parseFloat(import.meta.env.VITE_CHAT_THRESHOLD || "0.70"),
  top_k: parseInt(import.meta.env.VITE_CHAT_TOP_K || "4", 10),
};

export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
