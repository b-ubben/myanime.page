import { LOAD_TOP_TWENTY_MOST_POPULAR } from './types';
import { TOP_TWENTY_MOST_POPULAR_URL } from './../utils/endpoints';

export const loadTopTwentyMostPopular = () => {
  const config = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  return fetch(TOP_TWENTY_MOST_POPULAR_URL, config)
    .then(response => response.json())
    .then(responseData => {
      const { data } = responseData;
      console.log(data);
      return {
        type: LOAD_TOP_TWENTY_MOST_POPULAR,
        payload: [...data],
      }
    });
}
