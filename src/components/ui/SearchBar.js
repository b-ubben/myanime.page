import React from 'react';
import { batch, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearSearchResults, toggleSearchBarVisibility, setSearchBarInput, setSearchResults, setFocusedSeries, setRecentlyViewedSeries } from './../../actions';
import useSearchBarInput from './../hooks/useSearchBarInput';
import useSearchBarVisibility from './../hooks/useSearchBarVisibility';
import useSearchResults from './../hooks/useSearchResults';
import SearchResults from './SearchResults';

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
  color: ${props => props.searchBarIsVisible ? 'var(--white-smoke)' : 'var(--white)'};
  ${props => props.searchResult ? 'color: var(--white);' : ''}
  font-weight: bold;
  outline: none;
  padding: 0.5rem 1.5rem;
  transition: .1s linear;

  &:focus {
    border-color: var(--yellow);
  }

  &:focus,
  &:hover {
    box-shadow: var(--shadow);
    cursor: pointer;
  }
`;

const SearchBar = () => {
  const searchBarIsVisible = useSearchBarVisibility();
  const searchBarInput = useSearchBarInput();
  const dispatch = useDispatch();
  const searchResults = useSearchResults();
  const searchResult = searchResults.find(result => (searchBarInput === result.attributes.titles.en_jp || searchBarInput === result.attributes.titles.canonicalTitle)) || false;

  function handleInput(e) {
    const prevInputLength = searchBarInput.length;
    const currInputLength = e.target.value.length;

    dispatch(setSearchBarInput(e.target.value));

    if (currInputLength > prevInputLength) {
      dispatch(setSearchResults());
    } else {
      dispatch(clearSearchResults());
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    (!searchBarIsVisible || searchBarInput === '') && dispatch(toggleSearchBarVisibility());
    (searchBarIsVisible && searchBarInput === '') && dispatch(clearSearchResults());

    if (searchResult) {
      batch(() => {
        dispatch(setFocusedSeries(searchResult));
        dispatch(setRecentlyViewedSeries(searchResult));
      });
    }
  }

  return (
    <SearchBarContainer role="search">
      <SearchForm method="post">
        {searchBarIsVisible && <SearchInput autoComplete="off" type="text" name="search" onChange={handleInput} value={searchBarInput} />}
        {(searchBarIsVisible && searchResults.length > 0) && <SearchResults />}
        <SearchButton type="submit" onClick={handleSearch} searchBarIsVisible={searchBarIsVisible} searchResult={!!searchResult}>{searchBarIsVisible ? 'VIEW' : 'SEARCH'}</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;