import React from 'react';
import FilterButton from './FilterButton';
import FilterSectionStyle from  '../styled-components/FilterSectionStyle';

const FilterSection = ({filterType, onFilter}) =>  {
    return <FilterSectionStyle className="filter-list">
      Show : <FilterButton disabled={filterType === 'ALL'} onFilter={()=> onFilter('ALL')}> All </FilterButton>
      <FilterButton disabled={filterType === 'ACTIVE'} onFilter={() => onFilter('ACTIVE')}> Active </FilterButton> 
      <FilterButton disabled={filterType === 'COMPLETED'} onFilter={() => onFilter('COMPLETED')}> Completed </FilterButton>
    </FilterSectionStyle>;
};

export default FilterSection;