import * as actionsType from "./actionsType";
import * as api from "./api";

export const getWordsList = () => async (dispatch) => {
  try {
    const { data } = await api.getWordsList();
    dispatch({ type: actionsType.GET_WORDS, payload: data.wordList });
  } catch (error) {
    console.log(error);
  }
};

export const getRank = (score) => async (dispatch) => {
  try {
    const { data } = await api.getRank(score);
    dispatch({ type: actionsType.GET_RANK, payload: data.rank });
  } catch (error) {
    console.log(error);
  }
};
