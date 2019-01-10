import React from 'react';
import { Link } from 'react-router';

import ReviewListItemContainer from './review_list_item_container';

const reviewElements = (reviews) => {
  console.log(reviews);
  return (
    reviews.map(review => (
      <ReviewListItemContainer
        review={review}
        key={review.id}
      />
    ))
  )
};

const BenchDetail = ({ bench, reviews }) => {
  return (
    <div>
      <ul>
        <li>Description: {bench.description}</li>
        <li>Seats: {bench.seating}</li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
      </ul>

      <h3>Reviews</h3>
      {reviewElements(reviews)}
    </div>
  )
};

export default BenchDetail;
