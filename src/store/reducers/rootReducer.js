import { FETCH_MOVIE } from "../action/actionType";

const initialState = {
  movies: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
