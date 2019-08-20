import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.header`
  background: var(--white-smoke);
  box-shadow: var(--shadow);
  display: flex;
    align-items: center;
    justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const NavLogo = styled.h1`
  font-size: var(--base-font-size):
  font-weigth: 700;
`;

const Navigation = () => (
  <NavContainer>
    <NavLogo>MyAnime</NavLogo>
  </NavContainer>
);

export default Navigation;
