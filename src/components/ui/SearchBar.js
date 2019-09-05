import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleSearchBarVisibility } from './../../actions';
import useSearchBarInput from './../hooks/useSearchBarInput';
import useSearchBarVisibility from './../hooks/useSearchBarVisibility';

const SearchBarContainer = styled.section`
  padding: 0.25rem 0.5rem;
`;

const SearchForm = styled.form`
  position: relative;
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
  ${props => props.searchBarIsVisible ? '' : 'border-radius: 33px;'}
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

const SearchResultsContainer = styled.ul`
  background: var(--white);
  border: 2px solid var(--black-smoke);
  border-radius: 4px;
  box-shadow: var(--shadow);
  color: var(--black);
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
    bottom: -1;
    left: 10px;
  transition: .1s linear;
  width: 290px;
  z-index: 10;

  li {
    border-bottom: 2px solid var(--black-smoke);
    font-size: var(--small-font-size);
    padding: 0.5rem 1rem;

    &:last-of-type {
      border-bottom: unset;
    }
  
    &:focus,
    &:hover {
      background: var(--black-smoke);
    }
  }

  @media (max-width: 620px) {
    width: 190px;
  }
`;

const SearchResults = props => {
  const { searchResults } = props || [];

  if (searchResults.length === 0) {
    return <></>;
  }

  return (
    <SearchResultsContainer>
      {searchResults.map(result => <li key={result.id}>{result.title}</li>)}
    </SearchResultsContainer>
  );
};

const SearchBar = () => {
  const searchBarIsVisible = useSearchBarVisibility();
  const searchBarInput = useSearchBarInput();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const handleInput = e => setUserInput(e.target.value);
  const searchResults = [
    {
      id: 1,
      title: 'Testing 1',
    },
    {
      id: 2,
      title: 'Testing 2',
    }
  ];

  function handleSearch(e) {
    e.preventDefault();
    (!searchBarIsVisible || !userInput) && dispatch(toggleSearchBarVisibility());
  }

  return (
    <SearchBarContainer role="search">
      <SearchForm>
        {searchBarIsVisible && <SearchInput type="text" name="search" onChange={handleInput} value={searchBarInput || userInput} />}
        {(searchBarIsVisible && !!searchResults) && <SearchResults searchResults={searchResults} />}
        <SearchButton type="submit" onClick={handleSearch} searchBarIsVisible={searchBarIsVisible}>SEARCH</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;