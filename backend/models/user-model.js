const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    default: null,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    default: null,
    required: false,
    minLength: 4,
  },
  role: {
    type: String,
    default: null,
  },
  FPVerificationCode: {
    type: String,
    default: null,
  },
});

const user = mongoose.model("users", userSchema);
module.exports = user;
