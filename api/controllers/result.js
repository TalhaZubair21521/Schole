const Result = require("../models/result");
const Statistics = require("./functions/Statistics");
const { validationResult } = require("express-validator");

exports.Add = async (req, res) => {
  try {
    const result = await Result.findOne({ user: req.body.user });

    const game = req.body.game;
    const points = req.body.points;
    let response = null;
    let setObject = { status: req.body.status  };
    setObject[game] = result[game] + points;
    // console.log(setObject);
    response = await Result.findOneAndUpdate(
          { user: req.body.user },
          { $set: setObject}
        );

      res
        .status(200)
        .json({ type: "success", result: "Result Updated Successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};

exports.Statistics = async (req, res) => {
  try {

    const user = req.query.user;
    const result = await Result.findOne({ user: user });

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
