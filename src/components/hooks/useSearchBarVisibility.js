import { useSelector } from 'react-redux';

const useSearchBarVisibility = () => useSelector(state => state.searchBarVisibility);

export default useSearchBarVisibility;