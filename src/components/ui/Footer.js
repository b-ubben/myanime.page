import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--black);
  color: var(--white);
  padding-bottom: 1rem;
  padding-top: 3rem;
`;

const FooterCopy = styled.p`
  font-size: var(--small-font-size);
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <FooterCopy>MyAnime.Page &copy; 2019</FooterCopy>
  </FooterContainer>
);

export default Footer;