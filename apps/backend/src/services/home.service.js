import * as repository from "../repositories/home.repository.js";

export const getHomes = async (supabase, userId) => {
  return repository.getHomes(supabase, userId);
};

export const createHome = async (supabase, payload) => {
  return repository.createHome(supabase, payload);
};
