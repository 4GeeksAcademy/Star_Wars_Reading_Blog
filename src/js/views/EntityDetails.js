import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EntityDetails = ({ entityType }) => {
  const [entity, setEntity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/${entityType}/${id}/`);
        setEntity(response.data);
      } catch (error) {
        console.error('Error fetching entity details:', error);
      }
    };

    fetchData();
  }, [entityType, id]);

  if (!entity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{entity.name}</h2>
      <p>Height: {entity.height}</p>
      <p>Mass: {entity.mass}</p>
      <p>Hair Color: {entity.hair_color}</p>
      <p>Skin Color: {entity.skin_color}</p>
    </div>
  );
};

export default EntityDetails;
