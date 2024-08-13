import asyncHandler from "../middlewares/async.middleware.js";

export const exampleHandler = asyncHandler(async (req, res) => {
  const { file } = req;
  res.status(200).json({ msg: "upload success", file });
});
