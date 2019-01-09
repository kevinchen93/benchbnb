import React from 'react';
import BenchIndex from '../benches/bench_index';
import BenchMap from '../benches/bench_map';

const Search = (props) => {
  return (
    <div>
      <BenchMap benches={props.benches} filters={props.filters} updateFilter={props.updateFilter}/>
      <BenchIndex benches={props.benches} filters={props.filters} fetchBenches={props.fetchBenches} />
    </div>
  );
};

export default Search;
