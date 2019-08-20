import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.article`
  background: var(--black-smoke);
  box-shadow: var(--shadow);
  min-height: 360px;
`;

const Banner = () => (
  <BannerContainer>
    <h2>Your Anime Database</h2>
  </BannerContainer>
);

export default Banner;
