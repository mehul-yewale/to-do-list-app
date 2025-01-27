import React from 'react';
import FilterButton from './FilterButton';
import styled from 'styled-components';

const FilterSection = ({filterType, onFilter}) =>  {
    return <FilterSectionStyle className="filter-list">
      Show : <FilterButton disabled={filterType === 'ALL'} onFilter={()=> onFilter('ALL')}> All </FilterButton> &nbsp;
      <FilterButton disabled={filterType === 'ACTIVE'} onFilter={() => onFilter('ACTIVE')}> Active </FilterButton> &nbsp;
      <FilterButton disabled={filterType === 'COMPLETED'} onFilter={() => onFilter('COMPLETED')}> Completed </FilterButton>
    </FilterSectionStyle>;
};

const FilterSectionStyle = styled.section`
  margin-top: 1em;
`;

export default FilterSection;