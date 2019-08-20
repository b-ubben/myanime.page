import React from "react";
import styled from "styled-components";
import coffeeBae from "./../../assets/coffee-bae.png";

const BannerContainer = styled.article`
  background: var(--black-smoke);
  box-shadow: var(--shadow);
  height: 500px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    filter: blur(3px);
    height: 500px;
    position: absolute;
    top: 0;
    z-index: 0;
  }
`;

const StyledImg = styled.img`
  filter: drop-shadow(8px 2px 11px rgba(0, 0, 0, 0.69));
  max-width: calc(600px - 0.25vw);
  object-fit: cover;
  margin-top: 10px;
  position: absolute;
  right: 5%;
  transform: rotateY(180deg);
  width: 100%;
`;

const BannerCopyContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  padding: 1rem 0rem 1rem 3rem;
  position: absolute;
  top: 0;
  width: 50%;

  h1, p {
    z-index: 10;
  }

  h1 {
    font-size: calc(60px + .25vw);
    margin-bottom: 0;
  }

  p {
    font-size: calc(22px + .25vw);
    line-height: 2.5rem;
  }
`;

const Banner = () => (
  <BannerContainer>
    <BannerCopyContainer>
      <h1>Discover Your New Favorite Anime</h1>
      <p>
        Powered by <a href="https://kitsu.io/" rel="noopener noreferrer" target="_blank">Kitsu</a> &mdash; a modern anime discovery platform that helps you track the anime you're watching, discover new anime and socialize with other fans.
      </p>
    </BannerCopyContainer>
    <StyledImg src={coffeeBae} alt="Character with coffee cup" />
  </BannerContainer>
);

export default Banner;
