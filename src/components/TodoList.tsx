import React, {useMemo} from 'react';
import { ListColumnStyle, ListRowStyle, ListHeaderTextBold, ListSectionStyle } from '../styled-components/LIstStyle';
import CustomButton from '../styled-components/CustomButtonStyle';
import { TodoItem } from '../types/common';

interface TodoListProps {
    filterType: string;
    filterBy: (filterType: string) => TodoItem[];
    completeCallback: (item: any) => void;
    deleteItem: (item: any) => void;
};

const TodoList = ({filterType, filterBy, completeCallback, deleteItem}: TodoListProps) => {
    const listItems = useMemo(() => filterBy(filterType), [filterType, filterBy]);
    return <ListSectionStyle className='list-section'> 
        <div> Number of {filterType} items : {listItems.length} </div>
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
                    {!item.completed && <CustomButton onClick={() => completeCallback(item)}>
                        Mark As Completed
                    </CustomButton>}
                    <CustomButton primary={+true} onClick={() => deleteItem(item)}>
                        Delete
                    </CustomButton>
                </ListColumnStyle>
            </ListRowStyle>
        )}
    </ListSectionStyle>;
};

export default TodoList;