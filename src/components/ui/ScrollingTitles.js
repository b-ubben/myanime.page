import React from 'react';
import styled from 'styled-components';
import { scrollContainer } from '../../utils/scrollContainer';
import { setFocusedSeries, setRecentlyViewedSeries } from './../../actions';
import { useDispatch, batch } from 'react-redux';

const StyledArticle = styled.article`
  position: relative;
`;

const ScrollingContainer = styled.section`
  animation: 1s fadeIn linear;
  display: flex;
    align-items: center;
    justify-content: flex-start;
  min-height: 100%;
  overflow-x: auto;
  padding-bottom: 2rem;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideDown {
    from {
      min-height: 0%;
      opacity: 0;
    }
  }
`;

const ImageCardContainer = styled.figure`
  background: var(--white-smoke);
  border-radius: 1px;
  box-shadow: var(--shadow), var(--shadow), var(--shadow);
  height: 300px;
  outline: none;
  margin: 0 0.5rem 0 0;
  min-width: 550px;
  position: relative;
  transition: .1s linear;

  figcaption {
    font-weight: bold;
    padding: 0.5rem 1rem;
    position: absolute;
      right: 0;
      bottom: 0;
    text-shadow: 1px 1px 4px var(--black), -1px 1px 4px var(--black);
  }
  
  &:hover,
  &:focus {
    cursor: pointer;

    figcaption {
      display: none;
    }
    &::before {
      animation: .15s appear ease-in;
      background: rgba(0, 0, 0, 0.77);
      content: "${props => props.titles.en_jp}";
      display: flex;
        align-items: center;
        justify-content: center;
      font-size: calc(21px + .25vw);
      font-weight: bold;
      padding: 1rem;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }

  img {
    height: 300px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 550px;
  }

  @media (max-width: 1024px) {
    min-width: 350px;

    &, img {
      height: 250px;
    }

    img {
      width: 350px;
    }
  }

  @media (max-width: 620px) {
    min-width: 350px;

    &, img {
      height: 300px;
    }

    img {
      width: 350px;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const TitleBar = styled.h2`
  background: var(--black);
  box-shadow: var(--shadow);
  max-width: 350px;
  margin-bottom: 0.5rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  text-align: center;

  @media (max-width: 620px) {
    font-size: calc(23px + .25vw);
    max-width: 300px;
  }
`;

const ScrollButton = styled.button`
  background: var(--black);
  border: 2px solid transparent;
  border-top-${props => props.right ? 'left' : 'right'}-radius: 33px;
  border-bottom-${props => props.right ? 'left' : 'right'}-radius: 33px;
  box-shadow: var(--shadow);
  color: var(--white);
  font-size: calc(21px + .25vw);
  font-weight: bold;
  padding: 1rem 1.5rem;
  position: absolute;
  outline: none;
    ${props => props.right ? 'right' : 'left'}: 0;
    bottom: 35%;
  text-shadow: 1px 1px 6px var(--black);
  z-index: 10;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

const ImageCard = props => {
  const { attributes } = props;
  const { slug, coverImage, posterImage, titles } = attributes;
  const dispatch = useDispatch();
  function handleClick(series) {
    batch(() => {
      dispatch(setFocusedSeries(series));
      dispatch(setRecentlyViewedSeries(series));
    });
  }
  const imageError = e => e.target.src = 'https://placekitten.com/g/500/500';

  let imgSrc;
  if (!coverImage && !posterImage) {
    imgSrc = "";
  } else {
    imgSrc = posterImage ? posterImage.large : coverImage.tiny;
  }

  return (
    <ImageCardContainer {...attributes} onClick={e => handleClick(props)}>
      <img src={imgSrc} alt={slug || ""} onError={imageError} />
      <figcaption>{titles.en_jp}</figcaption>
    </ImageCardContainer>
  );
};


const ScrollingTitles = props => {
  const { series, title, scrollingContainerClassName } = props;

  function scrollToRight(e) {
    e.preventDefault();
    scrollingContainerClassName && scrollContainer('.' + scrollingContainerClassName);
  }

  function scrollToLeft(e) {
    e.preventDefault();
    scrollingContainerClassName && scrollContainer('.' + scrollingContainerClassName, true);
  }

  if (series.length < 4) {
    return <></>;
  }

  return (
    <StyledArticle>
      <TitleBar>{title}</TitleBar>
      {series.length > 3 && <ScrollButton onClick={e => scrollToLeft(e)}>&laquo;</ScrollButton>}
      <ScrollingContainer className={scrollingContainerClassName}>
        {series.map(anime => <ImageCard key={anime.id} {...anime} />)}
      </ScrollingContainer>
      {series.length > 3 && <ScrollButton right onClick={e => scrollToRight(e)}>&raquo;</ScrollButton>}
    </StyledArticle>
  );
};

export default ScrollingTitles;