const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required."],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
  },

  password: {
    type: String,
    required: [true, "Password is required."],
  },
  role: {
    type: String,
    required: [true, "Role is required."],
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
