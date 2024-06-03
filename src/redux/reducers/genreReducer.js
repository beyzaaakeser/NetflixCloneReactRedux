import { ActionTypes } from '../actionTypes';

const initalState = {
  isLoading: false,
  error: null,
  genres: [],
};

const genreReducer = (state = initalState, { type, payload }) => {

  switch (type) {
    case ActionTypes.GENRES_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.GENRES_ERROR:
      return { ...state, isLoading: false, error: payload };
    case ActionTypes.GENRES_SUCCESS:
      return { ...state, isLoading: false, error: null, genres: payload };
  }
  return state;
};
export default genreReducer;
