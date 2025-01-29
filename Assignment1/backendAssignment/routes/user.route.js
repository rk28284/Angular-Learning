const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router();

// Registration route
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Hash the password
    const hash = await bcrypt.hash(password, 5);
    const user = new UserModel({ name, email, password: hash });
    await user.save();
    res
      .status(201)
      .json({ msg: "New user has been created", user: { name, email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Authentication route
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.KEY, {
          expiresIn: "1h",
        });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.KEY, {
          expiresIn: "7d",
        });
        res
          .status(200)
          .json({ msg: "Logged in successfully", token, refreshToken });
      } else {
        res.status(401).json({ msg: "Wrong credentials" });
      }
    } else {
      res.status(404).json({ msg: "User  not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports=userRouter

