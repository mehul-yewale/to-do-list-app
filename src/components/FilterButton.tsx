import React from 'react';
import CustomButtonStyle from '../styled-components/CustomButtonStyle';
interface FilterButtonProps {
  disabled: boolean;
  onFilter: () => void;
  children: React.ReactNode;
};

const FilterButton = ({ disabled, onFilter, children }: FilterButtonProps) => {
  return <CustomButtonStyle disabled={disabled} onClick={onFilter}> {children} </CustomButtonStyle>;
};

export default FilterButton;