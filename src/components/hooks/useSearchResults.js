import { useSelector } from 'react-redux';

const useSearchResults = () => useSelector(state => state.searchResults.filter(result => !!result.attributes.titles.en_jp).map(result => result));

export default useSearchResults;