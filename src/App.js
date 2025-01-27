import React, {useState, useReducer, useCallback } from 'react';
import TodoList from './components/TodoList';
import FilterSection from './components/FilterView';
import AddTodoView from './components/AddTodoView';
import './App.css';

const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM' : return [...state, action.item];
      case 'DELETE_ITEM' : return state.filter(item => item.id !== action.item.id);
      case 'COMPLETED_ITEM' : return state.map(item =>
        (item.id === action.item.id)
          ? {...item, completed: true}
          : item )
      default: return state;
    }  
};

function App() {
  const [listState, dispatchListItem] = useReducer(todoListReducer, []);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
 
  const addItem = useCallback((item) => {
    const newItem = {title: item.title, taskDetail: item.details,  completed: false,
       id: listState.length === 0 ? 1 : listState[listState.length -1].id + 1};
    console.log("addItem----", newItem);

    item && dispatchListItem({type: 'ADD_ITEM', item: newItem});
  }, [listState]);

  const filteredData = useCallback(() => {
    switch (selectedFilter) {
      case 'ALL' : return listState;
      case 'ACTIVE' : return listState.filter(item => item.completed === false);
      case 'COMPLETED' : return listState.filter(item => item.completed === true);
      default: return listState;
    }
  }, [selectedFilter, listState]);

  const completeItemChange = useCallback((itemData) => {
    if (!itemData.completed) {
      dispatchListItem({type: 'COMPLETED_ITEM', item: itemData});
    } 
    console.log("completion" , itemData);
  }, [])

  return (
    <div className="my-app">
      <h2>ToDo App</h2>
      <AddTodoView onAddItem={addItem} />
      <FilterSection filterType={selectedFilter} onFilter={setSelectedFilter} />
      <TodoList filterType={selectedFilter} filterBy={filteredData} completeCallback={completeItemChange} deleteItem={(item) => dispatchListItem({type: 'DELETE_ITEM', item})}/>
      <br/>
    </div>
  );
}

export default App;
