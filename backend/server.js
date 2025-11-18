import express from "express";
import cors from "cors";
import supabase from "./supabaseClient.js";

const app = express();

// CORS FIX FOR S3 + ANY OTHER FRONTEND
app.use(cors({
  origin: "*",   // allow all origins
  methods: ["GET", "POST"],
}));

app.use(express.json());

// GET QUESTIONS
app.get("/questions", async (req, res) => {
  const { data, error } = await supabase
    .from("questions")
    .select("*");

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({ error });
  }

  res.json(data);
});

// Render uses dynamic PORT
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
