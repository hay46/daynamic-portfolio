import "dotenv/config"; // ← first line, loads .env
import express from "express";
import cors from "cors";
import db from "./config/db.js";
import authRouters from "./routers/authRouters.js";
import portfolioRouters from "./routers/portfolioRouters.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouters);
app.use("/api/portfolio", portfolioRouters);

// Health check — tells you if DB really works
app.get("/api/health", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) return res.status(500).json({ db: "down", error: err.message });
    res.json({ status: "ok", db: "connected" });
  });
 });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
