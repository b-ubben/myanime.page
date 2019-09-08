import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFocusedSeries } from './../../actions'

const FocusedSeriesContainer = styled.section`
  animation: .2s appear linear;
  background: rgba(0, 0, 0, 0.77);
  box-shadow: var(--shadow);
  overflow-y: scroll;
  padding: 1rem 0.5rem;
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
  border-radius: 3px;
  color: var(--black);
  margin: 0 auto;
  max-width: 720px;
  
  main {
    padding: 0 1rem 0.5rem 1rem;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

const FocusedSeriesImg = styled.img`
  filter: drop-shadow(var(--shadow));
  padding-top: 1.5rem;
  max-height: 500px;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 350px;
  }

  @media (max-width: 620px) {
    max-height: 250px;
  }
`;

const FocusedSeriesInfoContainer = styled.main`
  color: var(--grey);
  font-size: var(--small-font-size);
  padding: 0.75rem;
`;

const FocusedSeriesSynopsis = styled.p`
  color: var(--grey);
  font-size: var(--small-font-size);
  line-height: 1.3rem;
`;

const FocusedSeriesTitle = styled.h2`
  color: var(--black);
  margin: 2rem 0 0 0;
`;

const FocusedSeriesDetails = styled.dl`
  border-bottom: 3px solid var(--black-smoke);
  padding-bottom: 0.75rem;
  
  .bold {
    font-weight: bold;
  }
  
  dd {
    display: inline-block;
    margin: 0 0.75rem 0.35rem 0;
  }
`;

const FocusedSeriesDismissButton = styled.button`
  background: var(--blue);
  border: 2px solid transparent;
  border-radius: 33px;
  color: var(--white);
  cursor: pointer;
  display: block;
  font-weight: bold;
  margin: 1rem 0;
  outline: none;
  padding: 1rem 0;
  transition: .15s;
  width: 100%;
  
  &:focus {
    outline: 3px solid var(--yellow);
  }
  
  &:focus,
  &:hover {
    box-shadow: var(--shadow);
  }
`;

const FocusedSeries = props => {
  const { attributes } = props;
  const dispatch = useDispatch();

  const handleClick = e => e.target.classList.contains('dismissable') && dispatch(setFocusedSeries({}));

  return (
    <FocusedSeriesContainer onClick={handleClick} className="dismissable">
      <FocusedSeriesArticle>
        <FocusedSeriesImg src={attributes.posterImage.large} alt={attributes.titles.en_jp} />
        <FocusedSeriesInfoContainer>
          <FocusedSeriesTitle>{attributes.titles.en_jp}</FocusedSeriesTitle>
          <FocusedSeriesDetails>
            <dd><span className="bold">Community Rating:</span> {attributes.averageRating ? `${attributes.averageRating}%` : 'N/A'}</dd>
            <dd><span className="bold">Status:</span> {attributes.status}</dd>
            <dd><span className="bold">Episodes:</span> {attributes.episodeCount}</dd>
            <dd><span className="bold">Runtime:</span> {attributes.episodeLength}min</dd>
            <br />
            <dd><span className="bold">Start Date:</span> {attributes.startDate}</dd>
            <dd><span className="bold">End Date:</span> {attributes.endDate || 'N/A'}</dd>
          </FocusedSeriesDetails>
          <FocusedSeriesSynopsis><strong>Summary:</strong><br />{attributes.synopsis}</FocusedSeriesSynopsis>
          <FocusedSeriesDismissButton onClick={handleClick} className="dismissable">Go Back!</FocusedSeriesDismissButton>
        </FocusedSeriesInfoContainer>
      </FocusedSeriesArticle>
    </FocusedSeriesContainer>
  );
};

export default FocusedSeries;