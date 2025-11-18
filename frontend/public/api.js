export async function fetchQuizzes() {
  try {
    const res = await fetch("https://cloud-quiz-backend.onrender.com/questions");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
}
