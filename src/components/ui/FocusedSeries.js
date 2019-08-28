import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFocusedSeries } from './../../actions'

const FocusedSeriesContainer = styled.aside`
  background: var(--purple);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const FocusedSeries = props => {
  const { attributes } = props;
  const { canonicalTitle } = attributes;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setFocusedSeries({}));

  return (
    <FocusedSeriesContainer onClick={e => handleClick()}>
      <h1>{canonicalTitle}</h1>
    </FocusedSeriesContainer>
  );
};

export default FocusedSeries;