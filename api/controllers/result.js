const Result = require("../models/result");
const Statistics = require("./functions/Statistics");
const { validationResult } = require("express-validator");

exports.Add = async (req, res) => {
  try {
    const result = await Result.findOne({ user: req.body.user });

    const game = req.body.game;
    const points = req.body.points;
    let response = null;

    switch (game) {
      case "game1":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game1: points + result.game1 }
        );
        break;
      case "game2":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game2: points + result.game2 }
        );
        break;
      case "game3":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game3: points + result.game3 }
        );
        break;
      case "game4":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game4: points + result.game4 }
        );
        break;
      case "game5":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game5: points + result.game5 }
        );
        break;
      case "game6":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game6: points + result.game6 }
        );
        break;
      case "game7":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game7: points + result.game7 }
        );
        break;
      case "game8":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game8: points + result.game8 }
        );
        break;
      case "game9":
        response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: { status: req.body.status }, game9: points + result.game9 }
        );
        break;
      default:
        res.status(500).json({
          type: "failure",
          result: "Game number is not Correct.",
        });
    }

    if (response === null) {
      res
        .status(500)
        .json({ type: "failure", result: "Server not Responding. Try Again" });

      return;
    } else {
      res
        .status(200)
        .json({ type: "success", result: "Result Updated Successfully" });

      return;
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};

exports.Statistics = async (req, res) => {
  try {
    const result = await Result.findOne({ user: "5f9cf57addfdda374802028d" });

    // const list = [4, 4, 7, 5, 3, 2, 6, 6, 3];
    const list = [
      result.game1,
      result.game2,
      result.game3,
      result.game4,
      result.game5,
      result.game6,
      result.game7,
      result.game8,
      result.game9,
    ];

    const percentageList = Statistics.CalculateStatistics(list);
    // console.log(percentageList);

    res.status(200).json({ type: "success", result: percentageList });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};
