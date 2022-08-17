import React, { useContext } from 'react';
import Context from '../context/Context';

export default function FilterName() {
  const { filterByName: { name }, setPlanet } = useContext(Context);
  const handleChange = ({ target }) => {
    setPlanet(target.value);
  };
  return (
    <div>
      <label htmlFor="findPlanet">
        Busque por um planeta:
        <input
          data-testid="name-filter"
          value={ name }
          onChange={ handleChange }
          type="text"
          name="findPlanet"
          id="findPlanet"
        />
      </label>
    </div>
  );
}
