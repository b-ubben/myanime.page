import React from 'react';
import useRecentlyViewed from './../hooks/useRecentlyViewed';
import ScrollingTitles from './ScrollingTitles';

const RecentlyViewed = () => {
  const recentlyViewed = useRecentlyViewed();

  return (
    !!recentlyViewed && <ScrollingTitles series={recentlyViewed} title="Recently Viewed" scrollingContainerClassName="recently-viewed" />
  );
};

export default RecentlyViewed;