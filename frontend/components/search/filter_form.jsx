import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ minSeating, maxSeating, updateFilter }) => (
  <div>
    <span>Filter results:</span>
    <label>Minimum Seats</label>
    <input
      type="number"
      value={minSeating}
      onChange={handleChange('minSeating', updateFilter)}
    />
  <br />
    <label>Maximum Seats</label>
    <input
      type="number"
      value={maxSeating}
      onChange={handleChange('maxSeating', updateFilter)}
    />
  </div>
)
export default FilterForm;
