import React from 'react';
import { useSelector } from 'react-redux';
import ScrollingTitles from './ScrollingTitles';

const MostPopular = () => {
  const mostPopularTitles = useSelector(state => state.topTwentyMostPopular);

  return (
    !!mostPopularTitles && <ScrollingTitles title="Most Popular Titles" series={mostPopularTitles} scrollingContainerClassName="most-popular-titles" />
  );
};

export default MostPopular;