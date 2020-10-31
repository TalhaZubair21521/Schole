const User = require("../models/user");
const Result = require("../models/result");
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
        res.status(200).json({
          type: "success",
          result: "User Logged In Successfully",
          user: {
            id: Founduser._id,
            name: Founduser.name,
            phone: Founduser.phone,
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
