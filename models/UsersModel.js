const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name"],
      trim: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    shift: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    blood: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    registration: {
      type: String,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Enter your email"],
      trim: true,
    },
  },
  { versionKey: false }
);

const UsersModel = new mongoose.model("users", UsersSchema);

module.exports = UsersModel;
