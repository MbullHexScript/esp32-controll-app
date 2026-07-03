import * as service from "../services/home.service.js";

export const getHomes = async (req, res) => {
  try {
    const { data, error } = await service.getHomes(
      req.supabase,
      req.user.id
    );

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const createHome = async (req, res) => {
  try {
    const { name } = req.body;

    const { data, error } = await service.createHome(
      req.supabase,
      {
        user_id: req.user.id,
        name,
      }
    );

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.status(201).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
