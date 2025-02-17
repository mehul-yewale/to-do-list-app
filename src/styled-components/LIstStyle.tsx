import styled from "styled-components";

const ListRowStyle = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
`;
const ListColumnStyle = styled.div<{ textLineThrough?: boolean, alignself?: string }>`
   flex: 1;
   margin: 0.65em;
   text-decoration: ${props => props.textLineThrough ? 'line-through' : 'none'};
   align-self: ${props => props.alignself ? props.alignself : 'auto'} 
`;

const ListHeaderTextBold = styled.span`
  font-weight: 700;
  font-size: 1.2em;
`;

const ListSectionStyle = styled.section`
   padding-top: 20px;
`;

export {
   ListRowStyle,
   ListColumnStyle,
   ListHeaderTextBold,
   ListSectionStyle
};