import express from "express";
import { exampleHandler } from "../controllers/upload.controller.js";

const router = express.Router();

router.route("/upload").post(exampleHandler);

export default router;
