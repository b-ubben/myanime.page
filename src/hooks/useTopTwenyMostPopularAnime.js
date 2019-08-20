import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTopTwentyMostPopular } from './../actions/';

const useTopTwentyMostPopularAnime = props => {
  const { topTwentyMostPopular } = props;

  useEffect(() => {
    loadTopTwentyMostPopular();
  }, []);

  return topTwentyMostPopular;
}

const mapStateToProps = state => ({
  topTwentyMostPopular: state.topTwentyMostPopular,
});

export default () => connect(mapStateToProps)(useTopTwentyMostPopularAnime);
