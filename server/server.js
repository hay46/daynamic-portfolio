import "dotenv/config"; // ← first line, loads .env
import express from "express";
import cors from "cors";
import db, { initializeDatabase } from "./config/db.js"; // Import the init function
import authRouters from "./routers/authRouters.js";
import portfolioRouters from "./routers/portfolioRouters.js";

const app = express();

// FIXED: Removed the trailing slash from the Vercel URL
app.use(cors({ origin: "https://daynamic-portfolio-nfmy.vercel.app" }));
app.use(express.json());

app.use("/api/auth", authRouters);
app.use("/api/portfolio", portfolioRouters);

// Health check
app.get("/api/health", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) return res.status(500).json({ db: "down", error: err.message });
    res.json({ status: "ok", db: "connected" });
  });
});

// Start the server ONLY after the database tables are initialized
initializeDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to initialize database. Server not started.", err);
  });
