import { LOAD_TOP_TWENTY_MOST_POPULAR } from './../actions/types';

const initialState = {
  topTwentyMostPopular: [],
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TOP_TWENTY_MOST_POPULAR:
      return {
        ...state,
        topTwentyMostPopular: payload,
      }
    default:
      return state;
  }
}

export default rootReducer;