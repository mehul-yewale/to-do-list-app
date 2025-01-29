import React from 'react';
import FilterButton from './FilterButton';
import FilterSectionStyle from  '../styled-components/FilterSectionStyle';
import { FilterType } from '../types/common';

interface FilterSectionProps {
    filterType: FilterType;
    onFilter: (filterType: FilterType) => void;
    filterValueList: FilterType[];
};

const FilterSection = ({filterType, onFilter, filterValueList}: FilterSectionProps) =>  {
    return <FilterSectionStyle className="filter-list">
       Show : {filterValueList.map((filterValue: FilterType) => 
          <FilterButton key={filterValue} disabled={filterType === filterValue} onFilter={() => onFilter(filterValue)}> {filterValue} </FilterButton>)
       }
    </FilterSectionStyle>;
};

export default FilterSection;