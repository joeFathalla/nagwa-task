import * as actionsType from "../actions/actionsType";

const quizReducer = (
  state = {
    wordsList: [],
    rank: 0
  },
  action
) => {
  switch (action.type) {
    case actionsType.GET_WORDS:
      return {
        ...state,
        wordsList: action.payload
      };
    case actionsType.GET_RANK:
      return {
        ...state,
        rank: action.payload
      };
    default:
      return state;
  }
};

export default quizReducer;
