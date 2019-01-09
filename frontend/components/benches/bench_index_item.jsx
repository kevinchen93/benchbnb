import React from 'react';

const BenchIndexItem = (props) => {
  return (
    <div>
      <h3>{props.bench.description}</h3>
      <p>Latitude: {props.bench.lat}, Longitude: {props.bench.lng}</p>
    </div>
  );
};

export default BenchIndexItem;
