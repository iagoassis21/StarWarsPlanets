import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function Order() {
  const { setOrder } = useContext(Context);
  const [columnOrder, setColumnOrder] = useState({ column: 'population', sort: '' });

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div>
      <label htmlFor="columnOrderFilter">
        Ordenar
        <select
          id="columnOrderFilter"
          data-testid="column-sort"
          value={ columnOrder.column }
          name="columnOrderFilter"
          onChange={ (e) => setColumnOrder({
            column: e.target.value,
          }) }
        >
          {columnFilter.map((item, index) => (
            <option key={ index }>{item}</option>
          ))}
        </select>
      </label>
      <label htmlFor="ASC">
        <input
          type="radio"
          name="sort"
          id="ASC"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (e) => setColumnOrder({ ...columnOrder, sort: e.target.value }) }
        />
        ASC
      </label>
      <label htmlFor="DSC">
        <input
          type="radio"
          name="sort"
          id="DSC"
          data-testid="column-sort-input-desc"
          value="DSC"
          onChange={ (e) => setColumnOrder({ ...columnOrder, sort: e.target.value }) }
        />
        DSC
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder(columnOrder) }
      >
        Ordenar
      </button>

    </div>
  );
}
