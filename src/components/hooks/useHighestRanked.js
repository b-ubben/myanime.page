import { useSelector } from 'react-redux';

const useHighestRanked = () => {
  const topTwentyHighestRanked = useSelector(state => state.topTwentyHighestRanked);
  const fanFavorites = useSelector(state => state.fanFavorites);
  const fanFavoritesIDs = fanFavorites.map(series => series.id);
  const highestRanked = topTwentyHighestRanked.filter(series => !fanFavoritesIDs.includes(series.id));

  return highestRanked;
};

export default useHighestRanked;