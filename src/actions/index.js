import {
  DETERMINE_FAN_FAVORITES,
  LOAD_TOP_TWENTY_MOST_POPULAR,
  LOAD_TOP_TWENTY_HIGHEST_RANKED,
  FINISH_INITIAL_LOAD,
} from './types';
import {
  TOP_TWENTY_MOST_POPULAR_URL,
  TOP_TWENTY_HIGHEST_RANKED_URL,
} from './../utils/endpoints';
import { createNewStateWithData } from './../utils/createNewStateWithData';

export const determineFanFavorites = (topTwentyMostPopular, topTwentyHighestRanked) => async dispatch => {
  const joinedTopTwenty = topTwentyHighestRanked.concat(topTwentyMostPopular);
  const payload = Object.values(joinedTopTwenty.reduce((acc, series) => {
    if (!acc[series.id]) acc[series.id] = series;
    return acc;
  }, []));

  return dispatch({
    type: DETERMINE_FAN_FAVORITES,
    payload,
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

export const finishInitialLoad = () => dispatch => {
  dispatch({
    type: FINISH_INITIAL_LOAD,
    payload: true,
  });
};
