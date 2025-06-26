import express from "express";
import { getInSightController } from "../controllers/insight.controller.js";

const router = express.Router();

router.get("/", getInSightController);

export default router;
