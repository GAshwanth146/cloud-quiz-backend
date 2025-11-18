const API_URL = "https://cloud-quiz-backend.onrender.com";

export async function fetchQuizzes() {
  try {
    const res = await fetch(`${API_URL}/questions`);
    if (!res.ok) throw new Error("Failed to fetch questions!");

    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
}
