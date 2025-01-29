
import { useReducer, useCallback } from 'react';
import { TodoItem } from '../../types/common';

const todoListReducer = (state: TodoItem[], action: { type: string, item: TodoItem }) => {
  switch (action.type) {
    case 'ADD_ITEM': return [...state, action.item];
    case 'DELETE_ITEM': return state.filter((item: TodoItem) => item.id !== action.item.id);
    case 'COMPLETED_ITEM': return state.map((item: TodoItem) => (item.id === action.item.id) ? { ...item, completed: true } : item);
    default: return state;
  };
};

const useTodoListData = () => {
  const [listState, dispatchListItem] = useReducer(todoListReducer, []);

  const addItem = useCallback((item: { title: string, details: string }) => {
    const newItem = {
      title: item.title,
      taskDetail: item.details,
      completed: false,
      id: listState.length === 0 ? 1 : listState[listState.length - 1].id + 1
    };
    dispatchListItem({ type: 'ADD_ITEM', item: newItem });
  }, [listState]);

  const completeItem = useCallback((itemData: TodoItem) => {
    if (!itemData.completed) {
      dispatchListItem({ type: 'COMPLETED_ITEM', item: itemData });
    }
  }, []);

  const deleteItem = useCallback((itemData: TodoItem) => {
    dispatchListItem({ type: 'DELETE_ITEM', item: itemData });
  }, []);

  return { listState, addItem, completeItem, deleteItem };
};

export default useTodoListData;