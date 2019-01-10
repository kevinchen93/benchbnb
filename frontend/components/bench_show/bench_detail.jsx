import React from 'react';

const BenchDetail = ({ bench }) => {
  return (
    <div>
      <ul>
        <li>Description: {bench.description}</li>
        <li>Seats: {bench.seating}</li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
      </ul>
    </div>
  )
};

export default BenchDetail;