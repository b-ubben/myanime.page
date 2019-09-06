import { useSelector } from 'react-redux';

const useSearchResults = () => useSelector(state => state.searchResults);

export default useSearchResults;