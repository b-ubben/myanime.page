import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopTwentyMostPopular } from './../actions/';

const useTopTwentyMostPopularAnime = () => {
  const dispatch = useDispatch();
  const topTwentyMostPopular = useSelector(state => state.topTwentyMostPopular);

  useEffect(() => {
    dispatch(loadTopTwentyMostPopular());
  }, [dispatch])

  return topTwentyMostPopular;
}

export default useTopTwentyMostPopularAnime;