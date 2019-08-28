import {
  DETERMINE_FAN_FAVORITES,
  FINISH_INITIAL_LOAD,
  LOAD_TOP_TWENTY_MOST_POPULAR,
  LOAD_TOP_TWENTY_HIGHEST_RANKED,
  SET_FOCUSED_SERIES,
} from './types';
import {
  TOP_TWENTY_MOST_POPULAR_URL,
  TOP_TWENTY_HIGHEST_RANKED_URL,
} from './../utils/endpoints';
import { createNewStateWithData } from './../utils/createNewStateWithData';

export const determineFanFavorites = (topTwentyMostPopular, topTwentyHighestRanked) => dispatch => {
  const topTwentyMostPopularIDs = topTwentyMostPopular.map(series => series.id);
  const alsoHighestRanked = topTwentyHighestRanked.filter(series => topTwentyMostPopularIDs.includes(series.id));

  return dispatch({
    type: DETERMINE_FAN_FAVORITES,
    payload: alsoHighestRanked,
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

export const finishInitialLoad = () => dispatch => {
  dispatch({
    type: FINISH_INITIAL_LOAD,
    payload: true,
  });
};
