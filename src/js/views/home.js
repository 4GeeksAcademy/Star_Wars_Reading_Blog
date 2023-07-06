import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from "../store/flux.js"; // Import the useStore custom hook

const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  const store = useStore(); // Use the custom hook to access the store

  useEffect(() => {
    const fetchData = async () => {
      const peopleData = await store.fetchPeople();
      setPeople(peopleData.map(person => ({ uid: person.uid, name: person.name })));

      const vehiclesData = await store.fetchVehicles();
      setVehicles(vehiclesData.map(vehicle => ({ uid: vehicle.uid, name: vehicle.name })));

      const planetsData = await store.fetchPlanets();
      setPlanets(planetsData.map(planet => ({ uid: planet.uid, name: planet.name })));
    };

    fetchData();
  }, [store]);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map(person => (
          <li key={person.uid}>
            <Link to={`/people/${person.uid}`}>{person.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.uid}>
            <Link to={`/vehicles/${vehicle.uid}`}>{vehicle.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Planets</h2>
      <ul>
        {planets.map(planet => (
          <li key={planet.uid}>
            <Link to={`/planets/${planet.uid}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
