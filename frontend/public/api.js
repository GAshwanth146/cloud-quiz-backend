import { supabase } from "./supabase.js";

export async function fetchQuizzes() {
  const { data, error } = await supabase.from("questions").select("*");

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data;
}
