import { connect } from 'react-redux';

import BenchShow from './bench_show';
import { selectBench } from '../../reducers/selectors';
import { fetchBench } from '../../actions/bench_actions';

const mapStateToProps = (state, { match }) => {
  const benchId = parseInt(match.params.benchId);
  const bench = selectBench(state.entities, benchId);
  return {
    benchId,
    bench
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBench: (benchId) => dispatch(fetchBench(benchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchShow);
