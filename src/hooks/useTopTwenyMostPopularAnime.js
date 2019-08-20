import { useState, useEffect } from 'react';
import { TOP_TWENTY_MOST_POPULAR_URL } from './../utils/endpoints';

const useTopTwentyMostPopularAnime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
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
    .then(data => setAnime(data))
    .catch(err => new Error(err));
  }, []);

  return anime;
}

export default useTopTwentyMostPopularAnime;
