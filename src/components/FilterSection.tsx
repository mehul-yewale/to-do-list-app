import React from 'react';
import FilterButton from './FilterButton';
import FilterSectionStyle from  '../styled-components/FilterSectionStyle';
import { FilterType } from '../types/common';

interface FilterSectionProps {
    filterType: string;
    onFilter: (filterType: FilterType) => void;
};

const FilterSection = ({filterType, onFilter}: FilterSectionProps) =>  {
    return <FilterSectionStyle className="filter-list">
      Show : <FilterButton disabled={filterType === 'ALL'} onFilter={()=> onFilter('ALL')}> All </FilterButton>
      <FilterButton disabled={filterType === 'ACTIVE'} onFilter={() => onFilter('ACTIVE')}> Active </FilterButton> 
      <FilterButton disabled={filterType === 'COMPLETED'} onFilter={() => onFilter('COMPLETED')}> Completed </FilterButton>
    </FilterSectionStyle>;
};

export default FilterSection;