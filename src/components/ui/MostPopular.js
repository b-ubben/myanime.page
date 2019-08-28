import React from 'react';
import ScrollingTitles from './ScrollingTitles';
import useMostPopular from './../hooks/useMostPopular';

const MostPopular = () => {
  const mostPopular = useMostPopular();

  return (
    !!mostPopular && <ScrollingTitles title="Most Popular" series={mostPopular} scrollingContainerClassName="most-popular" />
  );
};

export default MostPopular;