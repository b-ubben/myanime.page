import { LOAD_TOP_TWENTY_MOST_POPULAR, FINISH_INITIAL_LOAD } from './types';
import { TOP_TWENTY_MOST_POPULAR_URL } from './../utils/endpoints';

export const loadTopTwentyMostPopular = () => async dispatch => {
  const config = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  const response = await fetch(TOP_TWENTY_MOST_POPULAR_URL, config);
  const { data } = await response.json();

  const newState = await {
    type: LOAD_TOP_TWENTY_MOST_POPULAR,
    payload: data,
  }

  return dispatch(newState);
};

export const finishInitialLoad = () => dispatch => {
  dispatch({
    type: FINISH_INITIAL_LOAD,
    payload: true,
  });
};
