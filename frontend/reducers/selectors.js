export const selectBench = ({ benches }, benchId) => {
  return benches[benchId];
};

export const selectReviewsForBench = ({ benches, reviews }, bench) => {
  return bench.reviewIds.map(reviewId => reviews[reviewId]);
};
