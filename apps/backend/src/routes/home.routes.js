import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  getHomes,
  createHome,
} from "../controllers/home.controller.js";

const router = express.Router();

router.get("/", authenticate, getHomes);
router.post("/", authenticate, createHome);

export default router;
