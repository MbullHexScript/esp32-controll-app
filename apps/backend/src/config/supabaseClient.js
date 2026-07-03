import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

export const createSupabaseClient = (token = null) => {
  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      global: {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {},
      },
    }
  );
};
