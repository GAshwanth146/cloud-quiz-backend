import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://iicgohersyrihlhohcgc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpY2dvaGVyc3lyaWhsaG9oY2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MjkwMDMsImV4cCI6MjA3ODIwNTAwM30.a3-JBu5zCNDRp8J0T9ukLi-xHVpiAIFVqeMLk6keYFs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
