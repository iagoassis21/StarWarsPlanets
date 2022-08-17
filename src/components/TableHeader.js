import React, { useContext } from 'react';
import Context from '../context/Context';

export default function TableHeader() {
  const { data } = useContext(Context);
  const tableKeys = Object.keys(data[0] || {}).filter((item) => item !== 'residents');
  return (
    <thead>
      <tr>
        {
          tableKeys.map((key, index) => (
            <th key={ index }>{key}</th>
          ))
        }
      </tr>
    </thead>
  );
}
