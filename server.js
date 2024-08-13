import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import uploadRouter from "./routes/upload.router.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api", uploadRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
