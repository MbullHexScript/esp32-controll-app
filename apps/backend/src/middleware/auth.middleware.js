import { createSupabaseClient } from "../config/supabaseClient.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing",
      });
    }

    const token = authHeader.replace("Bearer ", "");

    const supabase = createSupabaseClient(token);

    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    req.user = data.user;

    // Simpan client yang sudah membawa JWT user
    req.supabase = supabase;

    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
