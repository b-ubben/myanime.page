import { useSelector } from 'react-redux';

const useRecentlyViewed = () => useSelector(state => state.recentlyViewedSeries);

export default useRecentlyViewed;