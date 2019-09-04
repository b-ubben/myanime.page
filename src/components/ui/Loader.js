import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { batch, useDispatch, useSelector } from 'react-redux';
import {
  loadTopTwentyMostPopular,
  loadTopTwentyHighestRanked,
  finishInitialLoad,
  determineFanFavorites,
} from './../../actions';

const LoaderContainer = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
  height: 100vh;
  position: relative;
`;

const LoadingBar = styled.div`
  background: rgb(17,145,154);
  background: linear-gradient(145deg, rgba(17,145,154,1) 33%, rgba(0,247,93,1) 80%);
  box-shadow: 1px 1px 7px var(--white-smoke);
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  transition: .5s ease-in;
  width: ${props => props.percentage};
`;

const LoadingCopy = styled.h1`
  background: var(--black-smoke);
  box-shadow: var(--shadow);
  padding: 3rem;
`;

const Loader = () => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState('0%');
  const topTwentyMostPopular = useSelector(state => state.topTwentyMostPopular);
  const topTwentyHighestRanked = useSelector(state => state.topTwentyHighestRanked);

  useEffect(() => {
    batch(() => {
      dispatch(loadTopTwentyMostPopular());
      dispatch(loadTopTwentyHighestRanked());
    });
    dispatch(determineFanFavorites());
    setPercentage('50%');
    setPercentage('100%');
    (!!topTwentyHighestRanked.length && !!topTwentyMostPopular.length) && dispatch(finishInitialLoad());
  }, [dispatch, topTwentyHighestRanked, topTwentyMostPopular]);

  return (
    <LoaderContainer>
      <LoadingBar percentage={percentage} />
      <LoadingCopy>Loading all the anime!</LoadingCopy>
    </LoaderContainer>
  );
};

export default Loader;