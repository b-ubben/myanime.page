import React from 'react';
import styled from 'styled-components';
import useSearchResults from './../hooks/useSearchResults';
import { useDispatch } from 'react-redux';
import { setSearchBarInput } from './../../actions';

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

const SearchResults = () => {
  const searchResults = useSearchResults();
  const dispatch = useDispatch();
  const handleMouseOver = title => dispatch(setSearchBarInput(title));

  if (searchResults.length === 0) {
    return <></>;
  }

  return (
    <SearchResultsContainer>
      {searchResults.map(result => <li key={result.id} onMouseOver={e => handleMouseOver(result.attributes.titles.en_jp || result.attributes.canonicalTitle)}>{result.attributes.titles.en_jp}</li>)}
    </SearchResultsContainer>
  );
};

export default SearchResults;