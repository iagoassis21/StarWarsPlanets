import React, { useContext } from 'react';
import Context from '../context/Context';

function TableBody() {
  const { data, filterByName: { name: findPlanet },
    filterByNumericValues, order,
  } = useContext(Context);

  const filteredPlanets = data.filter((planet) => planet.name.toLowerCase()
    .includes(findPlanet.toLowerCase())).filter((column) => filterByNumericValues
    .every((beckenbowers) => {
      if (beckenbowers.comparison === 'maior que') {
        return +column[beckenbowers.column] > +beckenbowers.value;
      }
      if (beckenbowers.comparison === 'menor que') {
        return +column[beckenbowers.column] < +beckenbowers.value;
      }
      return +column[beckenbowers.column] === +beckenbowers.value;
    }));

  const sorted = Object.keys(order).length === 0
    ? filteredPlanets
    : filteredPlanets
      .sort((a) => {
        if (a[order.column].toString() === 'unknown') {
          return 1;
        }
        return +'-1';
      })
      .sort((a, b) => {
        if (order.sort === 'ASC') {
          return a[order.column] - b[order.column];
        }
        return b[order.column] - a[order.column];
      });

  return (
    <tbody>
      {
        sorted.map(({ name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }) => (
          <tr key={ name }>
            <td data-testid="planet-name">{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default TableBody;
