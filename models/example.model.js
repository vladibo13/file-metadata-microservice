import mongoose from "mongoose";

const exampleSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: [3, "Name should be at leats 3 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Example = mongoose.model("Example", exampleSchema);

export default Example;
