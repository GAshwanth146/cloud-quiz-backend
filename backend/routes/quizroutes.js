// backend/routes/quizroutes.js
import { Router } from "express";
import supabase from "../supabaseClient.js";

const router = Router();

router.get("/getQuiz", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("questions")
      .select("question_text, option_a, option_b, option_c, option_d, correct_answer");

    if (error) {
      console.error("Supabase query error:", error);
      return res.status(500).json([]);
    }
    // map to frontend format
    const questions = (data || []).map(q => ({
      question: q.question_text,
      option1: q.option_a,
      option2: q.option_b,
      option3: q.option_c,
      option4: q.option_d,
      answer: q.correct_answer
    }));

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

export default router;
