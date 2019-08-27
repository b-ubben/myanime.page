import React from "react";
import styled from "styled-components";

const NavContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  </NavContainer>
);

export default Navigation;
