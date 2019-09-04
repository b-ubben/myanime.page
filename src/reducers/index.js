import {
  DETERMINE_FAN_FAVORITES,
  FINISH_INITIAL_LOAD,
  LOAD_TOP_TWENTY_MOST_POPULAR,
  LOAD_TOP_TWENTY_HIGHEST_RANKED,
  SET_FOCUSED_SERIES,
  SET_RECENTLY_VIEWED_SERIES,
  SET_SEARCH_BAR_VISIBILITY,
  SET_SEARCH_BAR_INPUT,
  SET_SEARCH_RESULTS,
  TOGGLE_SEARCH_BAR_VISIBILITY,
} from './../actions/types';

const initialState = {
  fanFavorites: [],
  focusedSeries: {},
  initialLoadComplete: false,
  recentlyViewedSeries: [],
  searchBarInput: '',
  searchBarVisibility: false,
  searchResults: [],
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
      };

    case SET_RECENTLY_VIEWED_SERIES:
      return {
        ...state,
        recentlyViewedSeries: payload,
      };

    case SET_SEARCH_BAR_INPUT:
      return {
        ...state,
        searchBarInput: payload,
      };

    case SET_SEARCH_BAR_VISIBILITY:
      return {
        ...state,
        searchBarVisibility: payload,
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: payload,
      };

    case TOGGLE_SEARCH_BAR_VISIBILITY:
      return {
        ...state,
        searchBarVisibility: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;