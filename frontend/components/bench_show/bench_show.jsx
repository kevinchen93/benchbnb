import React from 'react';
import { Link } from 'react-router-dom';

import BenchMap from '../benches/bench_map';
import BenchDetail from './bench_detail';

const BenchShow = ({ bench, benchId, fetchBench }) => {
  const benches = {
    [benchId]: bench
  };

  return (
    <div>
      <Link to="/">Back to Benches Index</Link>
      <BenchMap
        singleBench={true}
        benches={benches}
        benchId={benchId}
        fetchBench={fetchBench}
      />
      <BenchDetail bench={bench} />
    </div>
  );
};

export default BenchShow;
