const User = require("../models/user");
const Result = require("../models/result");
const JWT = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.Signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.errors.length != 0) {
      res.json({ type: "failure", result: errors.errors[0].msg });
      return;
    } else {
      const user = new User(req.body);
      user.password = await User.CreateHash(user.password);
      user.save(async (err) => {
        if (err && err.code === 11000) {
          const keyName = Object.keys(err.keyValue)[0];
          res.json({
            type: "failure",
            result:
              keyName.charAt(0).toUpperCase() +
              keyName.slice(1) +
              " Already Exist. Use a different Email",
          });
        } else {
          const result = new Result({ user: user._id });
          result.save(async (err) => {
            if (err) {
              res.json({ type: "failure", result: "Server not Responding" });
            } else {
              res.status(200).json({
                type: "success",
                result: "user Registered Successfully",
              });
            }
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};

exports.Signin = async (req, res) => {
  try {
    const user = new User({
      email: req.query.email,
      password: req.query.password,
    });
    const Founduser = await User.findOne({ email: user.email });
    if (!Founduser) {
      res.json({ type: "failure", result: "No User With Such Email Exists" });
    } else {
      const isEqual = await User.isPasswordEqual(
        user.password,
        Founduser.password
      );
      if (isEqual) {
        // console.log("s");
        res.status(200).json({
          type: "success",
          result: "User Logged In Successfully",
          user: {
            id: Founduser._id,
            name: Founduser.name,
          },
        });
      } else {
        res.json({ type: "failure", result: "Wrong Password" });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};


exports.OauthGoogle = async (req, res) => {
  try {
    const { email, name, googleId } = req.body;
    const exist = await User.findOne({ email: email });
    // const token = await JWT.sign({ username: name }, JWT_SECRET_KEY);
    if (exist) {
      res.status(200).json({
        type: "success",
        result: "Already Registered",
        // token: token,
        user: {
          id: exist._id,
          name: exist.name,
        },
      });
      return;
    }
    const user = new User({
      name: name,
      email: email,
      age: 0,
      phone: 0,
      provider: { type: "google", providerId: googleId },
      completeStatus: false,
    });
    const response = await user.save();
    if (!response) {
      res
        .status(500)
        .json({ type: "failure", result: "Server not Responding. Try Again" });
      return;
    }
    const result = new Result({ user: user._id });
    // console.log(response);
    result.save(async (err) => {
      if (err) {
        res.json({ type: "failure", result: "Server not Responding" });
      } else {
        res.status(200).json({
          type: "success",
          result: "User Registered Successfully",
          user: {
            id: response._id,
            name: response.name,
          },
        });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};

exports.OauthFacebook = async (req, res) => {
  try {
    // console.log("here");
    const { email, name, userId } = req.body;
    const exist = await User.findOne({ email: email });
    // const token = await JWT.sign({ username: name }, JWT_SECRET_KEY);
    if (exist) {
      res.status(200).json({
        type: "success",
        result: "Already Registered",
        // token: token,
        user: {
          id: exist._id,
          name: exist.name,
        },
      });
      return;
    }
    const user = new User({
      name: name,
      email: email,
      age: 0,
      phone: 0,
      provider: { type: "facebook", providerId: userId },
      completeStatus: false,
    });
    const response = await user.save();
    if (!response) {
      res
        .status(500)
        .json({ type: "failure", result: "Server not Responding. Try Again" });
      return;
    }
    const result = new Result({ user: user._id });
    result.save(async (err) => {
      if (err) {
        res.json({ type: "failure", result: "Server not Responding" });
      } else {
        res.status(200).json({
          type: "success",
          result: "User Registered Successfully",
          user: {
            id: response._id,
            name: response.name,
          },
        });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};