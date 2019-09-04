import { useSelector } from 'react-redux';

const useRecentlyViewed = () => {
  const recentlyViewedSeries = useSelector(state => state.recentlyViewedSeries);

  return recentlyViewedSeries;
};

export default useRecentlyViewed;