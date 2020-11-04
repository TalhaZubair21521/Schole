const express = require("express");

const userController = require('../controllers/user');
const userHandler = require("../handlers/user");
const router = express.Router();

router.post("/signup", userHandler.userHandler, userController.Signup);
router.get("/signin", userController.Signin);
router.post("/googleOauth", userController.OauthGoogle);
router.post("/facebookOauth", userController.OauthFacebook);

exports.routes = router;