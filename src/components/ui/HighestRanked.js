import React from 'react';
import ScrollingTitles from './ScrollingTitles';
import useHighestRanked from './../hooks/useHighestRanked';

const HighestRanked = () => {
  const highestRanked = useHighestRanked();

  return (
    !!highestRanked && <ScrollingTitles series={highestRanked} title="Highest Ranked" scrollingContainerClassName="highest-ranked" />
  );
};

export default HighestRanked;