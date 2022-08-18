import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ActiveFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(Context);

  return (
    <div>
      {
        filterByNumericValues.length > 0 ? <span>Filtros ativos</span> : ''
      }
      {
        filterByNumericValues.map(({ column, comparison, value }) => (
          <div
            data-testid="filter"
            key={ column }
          >
            <span>
              {column}
              {comparison}
              {value}
            </span>
            <button
              type="button"
              onClick={ () => {
                setFilterByNumericValues(filterByNumericValues
                  .filter(({ column: xesque }) => column !== xesque));
              } }
            >
              X
            </button>
          </div>
        ))
      }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => {
          setFilterByNumericValues([]);
        } }
      >
        Deletar Filtros
      </button>
    </div>
  );
}
