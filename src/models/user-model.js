const mongoose = require('mongoose');

let UserModel;

try {
  // Check if the model has already been compiled
  UserModel = mongoose.model('users');
} catch (error) {
  // If the model doesn't exist, create it
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

  UserModel = mongoose.model('users', userSchema);
}

module.exports = UserModel;
