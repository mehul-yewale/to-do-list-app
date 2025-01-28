import React from 'react';
import CustomButton from '../styled-components/CustomButtonStyle';
const FilterButton = ({ disabled, onFilter, children }) => {
  return <CustomButton disabled={disabled} onClick={onFilter}> {children} </CustomButton>;
};

export default FilterButton;