import { useSelector } from 'react-redux';

const useTopTwentyMostPopularAnime = () => {
  const topTwentyMostPopular = useSelector(state => state.topTwentyMostPopular);

  return topTwentyMostPopular;
}

export default useTopTwentyMostPopularAnime;