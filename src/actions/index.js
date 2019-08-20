import { LOAD_TOP_TWENTY_MOST_POPULAR } from './types';
import { TOP_TWENTY_MOST_POPULAR_URL } from './../utils/endpoints';

export const loadTopTwentyMostPopular = () => dispatch => {
  async function fetchAnime() {
    const config = {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      }
    };
    const response = await fetch(TOP_TWENTY_MOST_POPULAR_URL, config);
    const { data } = await response.json();

    return data;
  }

  fetchAnime()
    .then(anime => dispatch({
      type: LOAD_TOP_TWENTY_MOST_POPULAR,
      payload: anime,
    }))
    .catch(err => {
      throw new Error(err);
    });
}