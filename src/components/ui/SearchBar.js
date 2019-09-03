import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.section`
  padding: 0.25rem 0.5rem;
`;

const SearchInput = styled.input`
  animation: .25s grow linear;
  background: var(--white-smoke);
  border: 2px solid transparent;
  border-top-left-radius: 33px;
  border-bottom-left-radius: 33px;
  color: var(--white);
  display: inline-block;
  padding: 0.5rem 1rem;
  width: 300px;

  &:focus {
    outline: none;
  }

  @media (max-width: 620px) {
    width: 200px;
  }

  @keyframes grow {
    from {
      width: 0px;
    }
  }
`;

const SearchButton = styled.button`
  background: var(--blue);
  border: 2px solid transparent;
  border-top-right-radius: 33px;
  border-bottom-right-radius: 33px;
  ${props => props.isHidden ? 'border-radius: 33px;' : ''}
  color: var(--white);
  font-weight: bold;
  outline: none;
  padding: 0.5rem 1.5rem;
  transition: .1s linear;

  &:focus,
  &:hover {
    box-shadow: var(--shadow);
    cursor: pointer;
  }
`;

const SearchBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [userInput, setUserInput] = useState('');
  const handleInput = e => setUserInput(e.target.value);

  function handleSearch(e) {
    e.preventDefault();
    isHidden && setIsHidden(false);
    !!userInput && console.log('...searching');
  }

  return (
    <SearchBarContainer role="search">
      <form method="post">
        {!isHidden && <SearchInput type="text" name="search" onChange={handleInput} value={userInput} />}
        <SearchButton type="submit" onClick={handleSearch} isHidden={isHidden}>SEARCH</SearchButton>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;