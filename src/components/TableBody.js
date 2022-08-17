import React, { useContext } from 'react';
import Context from '../context/Context';

function TableBody() {
  const { data, findPlanet } = useContext(Context);
  const filteredPlanets = data.filter((item) => item.name.toLowerCase()
    .includes(findPlanet.toLowerCase()));
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
