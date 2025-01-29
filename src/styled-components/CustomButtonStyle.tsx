import styled from "styled-components";
const CustomButtonStyle = styled.button<{ primary?: boolean | number, disabled?: boolean }>`
  background: ${props =>  props.disabled? 'orange' : props.primary ? "#BF4F74" : "white"};
  color: ${props => props.disabled? '#666666' : props.primary ? "white" : "#BF4F74"};
  font-size: 1em;
  margin-right: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'auto'}; 
`;

export default CustomButtonStyle;