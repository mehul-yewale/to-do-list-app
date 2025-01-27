import React from 'react';
import { ListColumnStyle, ListRowStyle, ListHeaderTextBold } from '../styled-components/LIstStyle';
import CustomButton from '../styled-components/CustomButtonStyle';
import styled from 'styled-components';
function TodoList(props) {
    const listItems = props.filterBy(props.filterType);
    return <ListSection className='list-section'> 
        <div> Number of {props.filterType} items : {listItems.length}</div>
        <ListRowStyle>
            <ListColumnStyle><ListHeaderTextBold>Title</ListHeaderTextBold></ListColumnStyle>
            <ListColumnStyle><ListHeaderTextBold>Details</ListHeaderTextBold></ListColumnStyle>
            <ListColumnStyle><ListHeaderTextBold>Actions</ListHeaderTextBold>  </ListColumnStyle>
        </ListRowStyle>
        {listItems && listItems.map((item, index) =>
            <ListRowStyle key={index}>
                <ListColumnStyle textLineThrough={item.completed}>{item.title}</ListColumnStyle>
                <ListColumnStyle textLineThrough={item.completed}>{item.taskDetail}</ListColumnStyle>
                <ListColumnStyle>
                    {!item.completed && <CustomButton onClick={() => props.completeCallback(item)}>
                        Complete
                    </CustomButton>}
                    <CustomButton primary onClick={() => props.deleteItem(item)}>
                        Delete
                    </CustomButton>
                </ListColumnStyle>
            </ListRowStyle>
        )}
    </ListSection>;
};

const ListSection = styled.section`
padding-top: 20px;
`;

export default TodoList;