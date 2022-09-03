import { Router } from "express";
import dataSet from "../../db/TestData.json";
import getWordList from "./items";
const wordsRouter = Router();

wordsRouter.route("*").all((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type", "application/json");
  next();
});

wordsRouter.route("/").get((req, res) => {
  res.status(200).json({ wordList: getWordList(dataSet.wordList) });
});

export default wordsRouter;
