import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EntityDetails = ({ entityType }) => {
  const [entity, setEntity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.dev/api/${entityType}/${id}`)
      .then(response => response.json())
      .then(data => setEntity(data.result.properties));
  }, [entityType, id]);

  if (!entity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{entity.name}</h2>
      <p>{entity.description}</p>
      <p>Other details: {JSON.stringify(entity)}</p>
    </div>
  );
};

export default EntityDetails;
