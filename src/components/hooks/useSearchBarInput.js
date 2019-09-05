import { useSelector } from 'react-redux';

const useSearchBarInput = () => {
  const searchBarInput = useSelector(state => state.searchBarInput);

  return searchBarInput;
};

export default useSearchBarInput;