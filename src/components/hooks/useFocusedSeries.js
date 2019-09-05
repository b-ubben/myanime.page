import { useSelector } from 'react-redux';

const useFocusedSeries = () => useSelector(state => state.focusedSeries);

export default useFocusedSeries;