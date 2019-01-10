import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

// Regular actions
const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

const receiveBench = (bench) => {
  return {
    type: RECEIVE_BENCH,
    bench
  };
};


// Thunk actions
export const fetchBenches = (filters) => {
  return dispatch => BenchAPIUtil.fetchBenches(filters).then(
    response => dispatch(receiveBenches(response))
  );
};

export const fetchBench = (benchId) => {
  return dispatch => BenchAPIUtil.fetchBench(benchId).then(
    response => dispatch(receiveBench(response))
  );
};

export const createBench = (bench) => {
  return dispatch => BenchAPIUtil.createBench(bench).then(
    response => dispatch(receiveBench(response))
  );
};
