import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    Actions.fetchPeople();
    Actions.fetchVehicles();
    Actions.fetchPlanets();

    // Subscribe to change events from the store
    eventEmitter.on('change', handleStoreChange);

    return () => {
      // Unsubscribe from change events when the component unmounts
      eventEmitter.removeListener('change', handleStoreChange);
    };
  }, []);

  const handleStoreChange = () => {
    setPeople(Store.getPeople());
    setVehicles(Store.getVehicles());
    setPlanets(Store.getPlanets());
  };

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map(person => (
          <li key={person.url}>
            <Link to={`/people/${person.uid}`}>{person.properties.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.url}>
            <Link to={`/vehicles/${vehicle.uid}`}>{vehicle.properties.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Planets</h2>
      <ul>
        {planets.map(planet => (
          <li key={planet.url}>
            <Link to={`/planets/${planet.uid}`}>{planet.properties.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
