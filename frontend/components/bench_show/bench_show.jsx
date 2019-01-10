import React from 'react';
import { Link } from 'react-router-dom';

import BenchMap from '../benches/bench_map';
import BenchDetail from './bench_detail';

import { ProtectedRoute } from '../../util/route_util';
import ReviewFormContainer from './review_form_container';
import { ReviewLink } from '../../util/link_util';

const BenchShow = ({ bench, benchId, fetchBench, reviews }) => {
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
      <BenchDetail
        bench={bench}
        reviews={reviews}
      />
      <ReviewLink
        component={ReviewFormContainer}
        to={`/benches/${benchId}/review`}
        label="Leave a Review"
      />
      <ProtectedRoute
        path="/benches/:benchId/review"
        component={ReviewFormContainer}
      />
    </div>
  );
};

export default BenchShow;
