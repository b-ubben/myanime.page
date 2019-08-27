import {
  DETERMINE_FAN_FAVORITES,
  FINISH_INITIAL_LOAD,
  LOAD_TOP_TWENTY_MOST_POPULAR,
  LOAD_TOP_TWENTY_HIGHEST_RANKED,
} from './../actions/types';

const initialState = {
  fanFavorites: [],
  initialLoadComplete: false,
  topTwentyMostPopular: [],
  topTwentyHighestRanked: [],
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
    default:
      return state;
  }
}

export default rootReducer;