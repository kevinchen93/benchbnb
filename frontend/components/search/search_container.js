import { connect } from 'react-redux';

import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state) => ({
  benches: Object.values(state.entities.benches),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
