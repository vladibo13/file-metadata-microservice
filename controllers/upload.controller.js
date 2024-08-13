import asyncHandler from "../middlewares/async.middleware.js";
import Example from "../models/example.model.js";

export const exampleHandler = asyncHandler(async (req, res) => {
  const examples = await Example.find();
  res.status(200).json({ msg: "test", examples });
});
