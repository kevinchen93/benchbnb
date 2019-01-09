import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

// Regular actions
const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

// Thunk actions
export const fetchBenches = (filters) => {
  return dispatch => BenchAPIUtil.fetchBenches(filters).then(
    response => dispatch(receiveBenches(response))
  );
};
