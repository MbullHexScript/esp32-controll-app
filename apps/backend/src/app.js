import express from "express";
import { supabase } from "./config/supabase.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import homeRoutes from "./routes/home.routes.js";

const app = express();
app.use(express.json());

// buat route ke semua route yang ada
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/homes", homeRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "HomeLynk API is running 🚀",
  });
});

// Test koneksi Supabase
app.get("/test", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    return res.status(500).json({
      success: false,
      message: "Supabase connected, but query failed.",
      error: error.message,
    });
  }

  res.json({
    success: true,
    message: "Supabase connected successfully!",
    data,
  });
});

export default app;
