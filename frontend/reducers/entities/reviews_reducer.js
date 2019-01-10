import { merge } from 'lodash';

import { RECEIVE_BENCH } from '../../actions/bench_actions';
import { RECEIVE_REVIEW } from '../../actions/review_actions';

const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCH:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, { [review.id]: action.review })
    default:
      return state;
  }
};

export default usersReducer;
