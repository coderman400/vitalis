const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  picture: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: String, // Storing the JWT token
});

const User = mongoose.model("User", userSchema);

module.exports = User;
