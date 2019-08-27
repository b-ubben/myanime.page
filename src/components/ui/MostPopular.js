import React from 'react';
import { useSelector } from 'react-redux';
import ScrollingTitles from './ScrollingTitles';

const MostPopular = () => {
  const topTwentyMostPopular = useSelector(state => state.topTwentyMostPopular);

  return (
    !!topTwentyMostPopular && <ScrollingTitles title="Most Popular" series={topTwentyMostPopular} scrollingContainerClassName="most-popular" />
  );
};

export default MostPopular;