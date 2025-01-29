import React, {useState, useReducer, useCallback } from 'react';
import TodoList from './components/TodoList';
import FilterSection from './components/FilterSection';
import AddTodoView from './components/AddTodoView';
import { FilterType } from './types/common';
import './App.css';

interface TodoItem {
  title: string;
  taskDetail: string;
  completed: boolean;
  id: number;
};

const todoListReducer = (state: TodoItem[], action: {type:string, item:TodoItem}) => {
    switch (action.type) {
      case 'ADD_ITEM' : return [...state, action.item];
      case 'DELETE_ITEM' : return state.filter((item: TodoItem) => item.id !== action.item.id);
      case 'COMPLETED_ITEM' : return state.map((item: TodoItem) => (item.id === action.item.id) ? {...item, completed: true} : item);
      default: return state;
    };
};

const App = () => {
  const [listState, dispatchListItem] = useReducer(todoListReducer, []);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ALL');
 
  const addItem = useCallback((item: {title: string, details:string}) => {
    const newItem = {
      title: item.title,
      taskDetail: item.details,
      completed: false,
      id: listState.length === 0 ? 1 : listState[listState.length -1].id + 1
    };
    item && dispatchListItem({type: 'ADD_ITEM', item: newItem});
  }, [listState]);

  const filteredData = useCallback(() => {
    switch (selectedFilter) {
      case 'ALL' : return listState;
      case 'ACTIVE' : return listState.filter((item:TodoItem) => !item.completed);
      case 'COMPLETED' : return listState.filter((item:TodoItem) => item.completed);
      default: return listState;
    }
  }, [selectedFilter, listState]);

  const completeItemChange = useCallback((itemData: TodoItem) => {
    if (!itemData.completed) {
      dispatchListItem({type: 'COMPLETED_ITEM', item: itemData});
    }
  }, [])

  return (
    <div className="my-app">
      <h2>ToDo App</h2>
      <AddTodoView onAddItem={addItem} />
      <FilterSection filterType={selectedFilter} onFilter={setSelectedFilter} />
      <TodoList filterType={selectedFilter} filterBy={filteredData} completeCallback={completeItemChange} deleteItem={(item: TodoItem) => dispatchListItem({type: 'DELETE_ITEM', item})}/>
      <br/>
    </div>
  );
}

export default App;
