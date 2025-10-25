import { createClient } from '@supabase/supabase-js'

// Temporary hardcoded values for testing
const supabaseUrl = 'https://bmgqsophlxtmzrqayxft.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtZ3Fzb3BobHh0bXpycWF5eGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMjE0NzYsImV4cCI6MjA3Njg5NzQ3Nn0.pABNgIubA0YwqTMoYlHOoNMKNdjfQ-Osm0Wq2_cSt8I'

// Debug: Log the environment variables (remove this after testing)
console.log('Environment variables:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing'
})

console.log('Using hardcoded values:', {
  supabaseUrl,
  supabaseAnonKey: supabaseAnonKey ? 'Present' : 'Missing'
})

// Validate that environment variables are set
if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export the URL and key for direct fetch operations (if needed)
export const SUPABASE_URL = `${supabaseUrl}/rest/v1/`
export const SUPABASE_KEY = supabaseAnonKey
