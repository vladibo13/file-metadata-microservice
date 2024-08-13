import express from "express";
import { exampleHandler } from "../controllers/upload.controller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/upload").post(upload.single("upfile"), exampleHandler);

export default router;
