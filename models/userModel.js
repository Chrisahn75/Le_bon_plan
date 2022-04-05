const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlength: 12,
    minlength: 3,
    unique: true,

  },
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
