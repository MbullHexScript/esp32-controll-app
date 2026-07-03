export const getHomes = async (supabase, userId) => {
  return await supabase
    .from("homes")
    .select("*")
    .eq("user_id", userId);
};

export const createHome = async (supabase, payload) => {
  return await supabase
    .from("homes")
    .insert(payload)
    .select()
    .single();
};
