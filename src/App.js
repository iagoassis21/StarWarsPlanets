import React from 'react';
import './App.css';
import FilterName from './components/FilterName';
import ActiveFilters from './components/ActiveFilters';
import Table from './components/Table';
import TripleFilter from './components/TripleFilter';
import Provider from './context/Provider';
import Order from './components/Order';

function App() {
  return (
    <Provider>
      <TripleFilter />
      <Order />
      <ActiveFilters />
      <FilterName />
      <Table />
    </Provider>
  );
}

export default App;
