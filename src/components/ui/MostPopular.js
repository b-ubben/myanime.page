import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { scrollContainer } from '../../utils/scrollContainer';

const StyledArticle = styled.article`
  margin: 4rem 0;
  position: relative;
`;

const MostPopularContainer = styled.section`
  display: flex;
    align-items: center;
    justify-content: flex-start;
  height: 100%;
  overflow-x: auto;
  padding-bottom: 2.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageCardContainer = styled.figure`
  background: var(--white-smoke);
  border-radius: 1px;
  box-shadow: var(--shadow), var(--shadow), var(--shadow);
  height: 300px;
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
    text-shadow: 1px 1px 15px var(--black);
  }
  
  &:hover,
  &:focus {
    figcaption {
      display: none;
    }
    &::before {
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
      z-index: 10;
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
    min-width: 400px;

    &, img {
      height: 250px;
    }

    img {
      width: 400px;
    }
  }

  @media (max-width: 620px) {
    min-width: 250px;

    &, img {
      height: 150px;
    }

    img {
      width: 250px;
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
  padding: 1rem 2rem;
  position: absolute;
  outline: none;
    ${props => props.right ? 'right' : 'left'}: 0;
    bottom: -10px;
  text-shadow: 1px 1px 6px var(--black);
  z-index: 10;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const ImageCard = props => {
  const { slug, coverImage, posterImage, titles } = props;

  let imgSrc;
  if (!coverImage && !posterImage) {
    imgSrc = "";
  } else {
    imgSrc = coverImage ? coverImage.tiny : posterImage.tiny;
  }

  return (
    <ImageCardContainer {...props}>
      <img src={imgSrc} alt={slug || ""} />
      <figcaption>{titles.en_jp}</figcaption>
    </ImageCardContainer>
  );
};

const MostPopular = () => {
  function scrollToRight(e) {
    e.preventDefault();
    scrollContainer('.most-popular-container');
  }

  function scrollToLeft(e) {
    e.preventDefault();
    scrollContainer('.most-popular-container', true);
  }
  const series = useSelector(state => state.topTwentyMostPopular);

  return (
    <StyledArticle>
      <TitleBar>Most Popular Titles</TitleBar>
      <ScrollButton onClick={e => scrollToLeft(e)}>&laquo;</ScrollButton>
      <MostPopularContainer className="most-popular-container">
        {series.map(anime => <ImageCard key={anime.id} {...anime.attributes} />)}
      </MostPopularContainer>
      <ScrollButton right onClick={e => scrollToRight(e)}>&raquo;</ScrollButton>
    </StyledArticle>
  );
};

export default MostPopular;