import React from 'react';
import BenchIndex from '../benches/bench_index';
import BenchMap from '../benches/bench_map';
import FilterForm from './filter_form';

const Search = ({ benches, minSeating, maxSeating, updateFilter }) => {
  return (
    <div>
      <h5>Click Map to Add Bench!</h5>
      <BenchMap
        singleBench={false}
        benches={benches}
        updateFilter={updateFilter}
      />
      <FilterForm
        minSeating={minSeating}
        maxSeating={maxSeating}
        updateFilter={updateFilter}
      />
      <BenchIndex benches={benches} />
    </div>
  );
};

export default Search;
