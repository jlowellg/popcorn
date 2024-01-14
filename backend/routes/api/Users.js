require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const cookies = require("../../middleware/cookies");

router.post("/register", async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ username });

    if (!username) {
      return res.status(401).json({ message: "Please input username!" });
    }

    if (!password) {
      return res.status(401).json({ message: "Please input password!" });
    }

    if (!confirmPassword) {
      return res.status(401).json({ message: "Please confirm your password!" });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({ message: "Password did not match!" });
    }

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    const newUser = await user.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return res.status(401).json({ message: "Please input username!" });
    }

    if (!password) {
      return res.status(401).json({ message: "Please input password!" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Username does not exists!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Password does not match!" });
    }

    const accessToken = jwt.sign(
      { username: user.username },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: "1d" }
    );

    cookies.set("token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    const userInfo = user.username;
    res
      .status(200)
      .json({ message: "Login successful", userInfo, accessToken });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post("/logout", (req, res) => {
  cookies.remove("token");
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
