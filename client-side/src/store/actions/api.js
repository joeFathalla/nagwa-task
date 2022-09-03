import axios from "axios";

export const getWordsList = () =>
  axios({
    method: "get",
    url: "http://localhost:4001/words"
  });

export const getRank = (score) =>
  axios({
    method: "post",
    url: "http://localhost:4001/rank",
    data: {
      score
    }
  });
