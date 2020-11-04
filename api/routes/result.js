const express = require("express");

const resultController = require("../controllers/result");
const router = express.Router();

router.put("/add", resultController.Add);
router.get("/statistics", resultController.Statistics);

exports.routes = router;
