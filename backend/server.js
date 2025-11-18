// backend/server.js
import express from "express";
import cors from "cors";
import quizRoutes from "./routes/quizroutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// mount
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => res.send("Backend running"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
