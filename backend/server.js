import express from "express";
import cors from "cors";
import { supabase } from "./supabaseClient.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/questions", async (req, res) => {
  const { data, error } = await supabase.from("questions").select("*");

  if (error) return res.status(500).json({ error });

  res.json(data);
});

// IMPORTANT: Use Render PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
