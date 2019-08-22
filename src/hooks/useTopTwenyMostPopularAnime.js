import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopTwentyMostPopular } from './../actions/';

const useTopTwentyMostPopularAnime = () => {
  const dispatch = useDispatch();
  const topTwentyMostPopular = useSelector(state => state.topTwentyMostPopular);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    dispatch(loadTopTwentyMostPopular());

    setSeries(topTwentyMostPopular);
  }, [dispatch, topTwentyMostPopular])

  return series || [];
}

export default useTopTwentyMostPopularAnime;