import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import FetchApi from '../services/FetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [findPlanet, setPlanet] = useState('');
  useEffect(() => {
    const getPlanets = async () => {
      const results = await FetchApi();
      setData(results);
    };
    getPlanets();
  }, []);

  const context = {
    data,
    findPlanet,
    setPlanet,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
