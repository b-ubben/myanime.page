import {
  CLEAR_SEARCH_RESULTS,
  DETERMINE_FAN_FAVORITES,
  FINISH_INITIAL_LOAD,
  LOAD_TOP_TWENTY_MOST_POPULAR,
  LOAD_TOP_TWENTY_HIGHEST_RANKED,
  SET_FOCUSED_SERIES,
  SET_RECENTLY_VIEWED_SERIES,
  SET_SEARCH_BAR_INPUT,
  SET_SEARCH_BAR_VISIBILITY,
  SET_SEARCH_RESULTS,
  TOGGLE_SEARCH_BAR_VISIBILITY,
} from './types';
import {
  TOP_TWENTY_MOST_POPULAR_URL,
  TOP_TWENTY_HIGHEST_RANKED_URL,
  getSearchUrl,
} from './../utils/endpoints';
import { createNewStateWithData } from './../utils/createNewStateWithData';

export const clearSearchResults = () => dispatch => {
  return dispatch({
    type: CLEAR_SEARCH_RESULTS,
    payload: [],
  });
};

export const determineFanFavorites = () => (dispatch, getState) => {
  const { topTwentyHighestRanked, topTwentyMostPopular } = getState();
  const topTwentyMostPopularIDs = topTwentyMostPopular.map(series => series.id);
  const alsoHighestRanked = topTwentyHighestRanked.filter(series => topTwentyMostPopularIDs.includes(series.id));

  return dispatch({
    type: DETERMINE_FAN_FAVORITES,
    payload: alsoHighestRanked,
  });
};

export const finishInitialLoad = () => dispatch => {
  dispatch({
    type: FINISH_INITIAL_LOAD,
    payload: true,
  });
};

export const loadTopTwentyMostPopular = () => async dispatch => {
  const newState = await createNewStateWithData(TOP_TWENTY_MOST_POPULAR_URL, LOAD_TOP_TWENTY_MOST_POPULAR);

  return dispatch(newState);
};

export const loadTopTwentyHighestRanked = () => async dispatch => {
  const newState = await createNewStateWithData(TOP_TWENTY_HIGHEST_RANKED_URL, LOAD_TOP_TWENTY_HIGHEST_RANKED);

  return dispatch(newState);
};

export const setFocusedSeries = series => dispatch => {
  return dispatch({
    type: SET_FOCUSED_SERIES,
    payload: series,
  });
};

export const setRecentlyViewedSeries = (newSeries) => (dispatch, getState) => {
  const { recentlyViewedSeries } = getState();
  const alreadyInRecentlyViewedSeries = !!recentlyViewedSeries.find(series => series.id === newSeries.id);
  const newState = alreadyInRecentlyViewedSeries ? recentlyViewedSeries : [...recentlyViewedSeries, newSeries];

  return dispatch({
    type: SET_RECENTLY_VIEWED_SERIES,
    payload: newState,
  });
};

export const setSearchBarInput = (input = '') => dispatch => {
  return dispatch({
    type: SET_SEARCH_BAR_INPUT,
    payload: input,
  });
};

export const setSearchBarVisibility = visibility => dispatch => {
  return dispatch({
    type: SET_SEARCH_BAR_VISIBILITY,
    payload: visibility,
  });
};

export const toggleSearchBarVisibility = () => (dispatch, getState) => {
  const { searchBarVisibility } = getState();

  return dispatch({
    type: TOGGLE_SEARCH_BAR_VISIBILITY,
    payload: !searchBarVisibility,
  });
}

export const setSearchResults = () => async (dispatch, getState) => {
  const { searchBarInput } = getState();
  const url = getSearchUrl(searchBarInput);
  const newState = await createNewStateWithData(url, SET_SEARCH_RESULTS);

  return dispatch(newState);
};