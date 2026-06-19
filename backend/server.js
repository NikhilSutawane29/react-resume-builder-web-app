import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory name for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000; // Uses env port or defaults to 5000

// CORS Configuration using your .env CLIENT_URL
const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173"; // Fallback to standard Vite port if env is blank

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

// CONNECT DB
connectDB();

// MIDDLEWARE
app.use(express.json());

// Serve static files from uploads folder (Cleaned up and combined)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ROUTES
app.use("/api/auth", userRoutes); // User authentication routes
app.use("/api/resume", resumeRoutes); // Resume management routes

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(err.status || 500).json({
    message:
      process.env.NODE_ENV === "production" ? "Server error" : err.message,
    ...(process.env.NODE_ENV !== "production" && { error: err.message }),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
});
