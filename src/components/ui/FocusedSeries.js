import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFocusedSeries } from './../../actions'

const FocusedSeriesContainer = styled.section`
  animation: .2s appear linear;
  background: rgba(0, 0, 0, 0.77);
  box-shadow: var(--shadow);
  overflow-y: scroll;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
  }
`;

const FocusedSeriesArticle = styled.article`
  animation: .25s slideUp linear;
  background: var(--white);
  color: var(--black);
  margin: 0 auto;
  max-width: 720px;
  min-height: 100%;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

const FocusedSeriesImg = styled.img`
  max-height: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-height: 350px;
  }

  @media (max-width: 620px) {
    max-height: 250px;
  }
`;

const FocusedSeriesTitle = styled.h2`
  margin-top: 0;
  padding: 1rem;
`;

const FocusedSeries = props => {
  console.log(props);
  const { attributes } = props;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setFocusedSeries({}));

  return (
    <FocusedSeriesContainer onClick={e => handleClick()} tabIndex="0" role="button">
      <FocusedSeriesArticle>
        <main>
          <FocusedSeriesImg src={attributes.posterImage.large} alt={attributes.titles.en_jp || attributes.titles.en} />
          <FocusedSeriesTitle>{attributes.titles.en_jp || "Test Title"}</FocusedSeriesTitle>
          <p>{attributes.synopsis}</p>
        </main>
      </FocusedSeriesArticle>
    </FocusedSeriesContainer>
  );
};

export default FocusedSeries;