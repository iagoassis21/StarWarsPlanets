import React from 'react';
import './App.css';
import FilterName from './components/FilterName';
import Table from './components/Table';
import TripleFilter from './components/TripleFilter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TripleFilter />
      <FilterName />
      <Table />
    </Provider>
  );
}

export default App;
