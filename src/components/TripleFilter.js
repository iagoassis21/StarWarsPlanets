import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

function TripleFilter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);
  const [stateTripleFilter, setTripleFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  const dereguejhonson = columnFilter.filter((brinbols) => filterByNumericValues
    .every((xesque) => brinbols !== xesque.column));

  useEffect(() => {
    setTripleFilter({ ...stateTripleFilter,
      column: dereguejhonson[0],
    });
  }, [filterByNumericValues]);

  return (
    <div>
      <label htmlFor="columnFilter">
        <select
          id="columnFilter"
          data-testid="column-filter"
          value={ stateTripleFilter.column }
          name="columnFilter"
          onChange={ (e) => setTripleFilter({
            ...stateTripleFilter,
            column: e.target.value,
          }) }
        >
          {dereguejhonson.map((item, index) => (
            <option key={ index }>{item}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        <select
          id="comparisonFilter"
          data-testid="comparison-filter"
          value={ stateTripleFilter.comparison }
          name="comparisonFilter"
          onChange={ (e) => setTripleFilter({
            ...stateTripleFilter,
            comparison: e.target.value,
          }) }
        >
          {comparisonFilter.map((item, index) => (
            <option key={ index }>{item}</option>
          ))}
        </select>
      </label>
      <label htmlFor="valuefilter">
        <input
          value={ stateTripleFilter.value }
          id="valuefilter"
          name="valuefilter"
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setTripleFilter({
            ...stateTripleFilter,
            value: e.target.value,
          }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNumericValues(
          [...filterByNumericValues, stateTripleFilter],
        ) }
      >
        Clique
      </button>
    </div>
  );
}

export default TripleFilter;
