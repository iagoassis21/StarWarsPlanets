import React from 'react';
import './App.css';
import FilterName from './components/FilterName';
import ActiveFilters from './components/ActiveFilters';
import Table from './components/Table';
import TripleFilter from './components/TripleFilter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TripleFilter />
      <ActiveFilters />
      <FilterName />
      <Table />
    </Provider>
  );
}

export default App;
