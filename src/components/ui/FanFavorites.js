import React from 'react';
import { useSelector } from 'react-redux';
import ScrollingTitles from './ScrollingTitles';

const FanFavorites = () => {
  const fanFavorites = useSelector(state => state.fanFavorites);

  return (
    !!fanFavorites && <ScrollingTitles series={fanFavorites} title="Fan Favorites" scrollingContainerClassName="fan-favorites" />
  );
};

export default FanFavorites;