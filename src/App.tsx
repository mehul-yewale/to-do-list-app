import React, {useState, useMemo } from 'react';
import TodoList from './components/TodoList';
import FilterSection from './components/FilterSection';
import AddTodoView from './components/AddTodoView';
import { FilterType, FilterTypeEnum } from './types/common';
import useFilterListByFilterType from './components/custom-hooks/useFilterListByFilterType';
import useTodoListData from './components/custom-hooks/useTodoListData';
import './App.css';

const App = () => {
  const { listState, addItem, completeItem, deleteItem } = useTodoListData();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('ALL');
  const filteredData = useFilterListByFilterType(listState, selectedFilter);
  const filterValueList = useMemo<FilterTypeEnum[]>(() => Object.values(FilterTypeEnum), []);

  return (
    <div className="my-app">
      <h2>ToDo App</h2>
      <AddTodoView onAddItem={addItem} />
      <FilterSection filterType={selectedFilter} onFilter={setSelectedFilter} filterValueList={filterValueList}/>
      <TodoList filterType={selectedFilter} listItems={filteredData} completeCallback={completeItem} deleteItem={deleteItem}/>
      <br/>
    </div>
  );
}

export default App;
