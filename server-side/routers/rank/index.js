import { Router } from "express";
import dataSet from "../../db/TestData.json";
const rankRouter = Router();

rankRouter.route("*").all((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type", "application/json");
  next();
});

rankRouter.route("/").post((req, res) => {
  const { score } = req.body;
  console.log(req.body);
  let scoreList = [...dataSet.scoresList];
  let lessScoreList = scoreList.filter((el) => el < score);
  let rankfull = (lessScoreList.length * 100) / 30;
  // The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
  // the following line is to round the number
  let rankRounded = Math.round((rankfull + Number.EPSILON) * 100) / 100;
  res.status(200).json({ rank: rankRounded });
});

export default rankRouter;
