const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const secret = "5aJif0OZjepB63NRwyNSkk0czzttHKjXNQbEImrW";

router.get("/", (_req, res) => {
  res.render("login");
});
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }
  const token = jwt.sign({ id: user._id }, secret);

  res.cookie("jwt", token, { httpOnly: true, secure: false });

  res.json({
    message: "This your token",
  });
  res.redirect("/profile");
});

module.exports = router;