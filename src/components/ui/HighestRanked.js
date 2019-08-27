import React from 'react';
import { useSelector } from 'react-redux';
import ScrollingTitles from './ScrollingTitles';

const HighestRanked = () => {
  const topTwentyHighestRanked = useSelector(state => state.topTwentyHighestRanked);

  return (
    !!topTwentyHighestRanked && <ScrollingTitles series={topTwentyHighestRanked} title="Highest Ranked" scrollingContainerClassName="highest-ranked" />
  );
};

export default HighestRanked;