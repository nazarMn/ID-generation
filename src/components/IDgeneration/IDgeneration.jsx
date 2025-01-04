import React, { useState } from 'react';

export default function IDgeneration() {
  const [uniqueId, setUniqueId] = useState('');

  const generateId = async () => {
    try {
      const response = await fetch('http://localhost:3000/generate-id');
      const data = await response.json();
      setUniqueId(data.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='idgeneration'>
      <button onClick={generateId}>Generate</button>
      {uniqueId && (
        <div>
          <p>{uniqueId}</p>
        </div>
      )}
    </div>
  );
}
