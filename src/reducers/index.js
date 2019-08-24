import { LOAD_TOP_TWENTY_MOST_POPULAR, FINISH_INITIAL_LOAD } from './../actions/types';

const initialState = {
  topTwentyMostPopular: [],
  initialLoadComplete: false,
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TOP_TWENTY_MOST_POPULAR:
      return {
        ...state,
        topTwentyMostPopular: payload,
      }
    case FINISH_INITIAL_LOAD:
      return {
        ...state,
        initialLoadComplete: payload,
      }
    default:
      return state;
  }
}

export default rootReducer;