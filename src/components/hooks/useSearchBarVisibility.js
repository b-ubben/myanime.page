import { useSelector } from 'react-redux';

const useSearchBarVisibility = () => {
  const searchBarVisibility = useSelector(state => state.searchBarVisibility);

  return searchBarVisibility;
};

export default useSearchBarVisibility;