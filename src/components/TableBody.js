import React, { useContext } from 'react';
import Context from '../context/Context';

function TableBody() {
  const { data, filterByName: { name: findPlanet },
    filterByNumericValues,
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

  return (
    <tbody>
      {
        filteredPlanets.map(({ name,
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
            <td>{name}</td>
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
