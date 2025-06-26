import express from "express";
import { getMarsRoverPhotosController } from "../controllers/rover.controller.js";

const router = express.Router();

router.get("/", getMarsRoverPhotosController);

export default router;
