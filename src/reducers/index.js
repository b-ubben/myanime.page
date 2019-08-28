import {
  DETERMINE_FAN_FAVORITES,
  FINISH_INITIAL_LOAD,
  LOAD_TOP_TWENTY_MOST_POPULAR,
  LOAD_TOP_TWENTY_HIGHEST_RANKED,
  SET_FOCUSED_SERIES,
} from './../actions/types';

const initialState = {
  fanFavorites: [],
  focusedSeries: {},
  initialLoadComplete: false,
  topTwentyMostPopular: [],
  topTwentyHighestRanked: [],
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DETERMINE_FAN_FAVORITES:
      return {
        ...state,
        fanFavorites: payload,
      };
    case FINISH_INITIAL_LOAD:
      return {
        ...state,
        initialLoadComplete: payload,
      };
    case LOAD_TOP_TWENTY_MOST_POPULAR:
      return {
        ...state,
        topTwentyMostPopular: payload,
      };
    case LOAD_TOP_TWENTY_HIGHEST_RANKED:
      return {
        ...state,
        topTwentyHighestRanked: payload,
      };
    case SET_FOCUSED_SERIES:
      return {
        ...state,
        focusedSeries: payload,
      }
    default:
      return state;
  }
}

export default rootReducer;