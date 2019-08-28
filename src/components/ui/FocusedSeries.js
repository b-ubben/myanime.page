import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFocusedSeries } from './../../actions'

const FocusedSeriesContainer = styled.section`
  animation: .2s slideUp linear;
  background: rgba(0, 0, 0, 0.77);
  box-shadow: var(--shadow);
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  @keyframes slideUp {
    from {
      opacity: 0;
    }
  }
`;

const FocusedSeriesArticle = styled.article`
  background: var(--white);
  color: var(--black);
  margin: 0 auto;
  max-width: 760px;
  max-width: calc(760px + 0.25vw);
  min-height: 100%;
  width: 95%;
`;

const FocusedSeriesTitle = styled.h2`
  margin-top: 0;
  padding: 1rem;
`;

const FocusedSeries = props => {
  const { attributes } = props;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setFocusedSeries({}));

  return (
    <FocusedSeriesContainer onClick={e => handleClick()}>
      <FocusedSeriesArticle>
        <FocusedSeriesTitle>{attributes.titles.en_jFocusedSeriesTitle || "Test Title"}</FocusedSeriesTitle>
      </FocusedSeriesArticle>
    </FocusedSeriesContainer>
  );
};

export default FocusedSeries;