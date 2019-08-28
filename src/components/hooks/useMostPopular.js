import { useSelector } from 'react-redux';

const useMostPopular = () => {
  const topTwentyMostPopular = useSelector(state => state.topTwentyMostPopular);
  const fanFavorites = useSelector(state => state.fanFavorites);
  const fanFavoritesIDs = fanFavorites.map(series => series.id);
  const mostPopular = topTwentyMostPopular.filter(series => !fanFavoritesIDs.includes(series.id));

  return mostPopular;
};

export default useMostPopular;