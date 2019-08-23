import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledArticle = styled.article`
  margin: 4rem 0;
`;

const MostPopularContainer = styled.section`
  display: flex;
    align-items: center;
    justify-content: flex-start;
  height: 100%;
  overflow-x: auto;
  padding-bottom: 2rem;
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
  
  &:hover,
  &:focus {
    figcaption {
      z-index: 10;
    }
    &::before {
      background: rgba(0, 0, 0, 0.77);
      content: "${props => props.titles.en_jp}";
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
`;

const TitleBar = styled.h2`
  background: var(--black);
  box-shadow: var(--shadow);
  max-width: 350px;
  margin-bottom: 0.5rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
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
  const series = useSelector(state => state.topTwentyMostPopular);

  return (
    <StyledArticle>
      <TitleBar>Most Popular Titles</TitleBar>
      <MostPopularContainer>
        {series.map(anime => <ImageCard key={anime.id} {...anime.attributes} />)}
      </MostPopularContainer>
    </StyledArticle>
  );
};

export default MostPopular;