import { supabase, supabaseAdmin } from "../config/supabase.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    // Register ke Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    const user = data.user;

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User gagal dibuat.",
      });
    }

    // Simpan profil ke public.users menggunakan Service Role
    console.log("SERVICE ROLE:", process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 20));
    const {
      data: insertedUser,
      error: insertError,
    } = await supabaseAdmin
      .from("users")
      .insert({
        id: user.id,
        full_name,
      })
      .select();

    console.log("========== INSERT USER ==========");
    console.log("Auth User ID :", user.id);
    console.log("Inserted Data:", insertedUser);
    console.log("Insert Error :", insertError);
    console.log("=================================");

    if (insertError) {
      return res.status(400).json({
        success: false,
        message: insertError.message,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Register Berhasil",
      user: insertedUser[0],
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }

    return res.json({
      success: true,
      message: "Login Berhasil",
      session: data.session,
      user: data.user,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
