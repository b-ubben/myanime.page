import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const NavContainer = styled.header`
  display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const NavLogo = styled.h2`
  font-size: var(--base-font-size):
  padding: 0.5rem 1rem;
  text-shadow: var(--shadow);
`;

const Navigation = () => (
  <NavContainer>
    <NavLogo>myAnime</NavLogo>
    <SearchBar />
  </NavContainer>
);

export default Navigation;
