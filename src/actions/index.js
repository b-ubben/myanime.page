import { LOAD_TOP_TWENTY_MOST_POPULAR, FINISH_INITIAL_LOAD } from './types';
import { TOP_TWENTY_MOST_POPULAR_URL } from './../utils/endpoints';
import { fetchData } from './../utils/fetchData';

export const loadTopTwentyMostPopular = () => async dispatch => {
  const newState = {
    type: LOAD_TOP_TWENTY_MOST_POPULAR,
  };

  try {
    const payload = await fetchData(TOP_TWENTY_MOST_POPULAR_URL);
    Object.assign(newState, { payload });
  } catch (err) {
    Object.assign(newState, { payload: [] });
    throw new Error(err);
  }

  return dispatch(newState);
};

export const finishInitialLoad = () => dispatch => {
  dispatch({
    type: FINISH_INITIAL_LOAD,
    payload: true,
  });
};
