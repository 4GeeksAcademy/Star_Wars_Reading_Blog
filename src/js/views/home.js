import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore, Actions } from "../store/flux";
import axios from 'axios';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  const store = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const peopleData = await Actions.fetchPeople();
      setPeople(peopleData);

      const vehiclesData = await Actions.fetchVehicles();
      setVehicles(vehiclesData);

      const planetsData = await Actions.fetchPlanets();
      setPlanets(planetsData);
    };

    fetchData();
  }, []);

  const handleFavorite = (type, uid) => {
    // Implement your favorite logic here
    console.log(`Favorite ${type} with UID: ${uid}`);
  };

  return (
    <div>
      <h2>People</h2>
      <div className="card-group">
        {people.map(person => (
          <div className="card" key={person.uid}>
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">
                Gender: {person.gender}<br />
                Hair Color: {person.hairColor}<br />
                Eye Color: {person.eyeColor}
              </p>
              <Link to={`/people/${person.uid}`} className="btn btn-primary">
                View Details
              </Link>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleFavorite('person', person.uid)}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className="card-group">
        {vehicles.map(vehicle => (
          <div className="card" key={vehicle.uid}>
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">
                Model: {vehicle.model}<br />
                Manufacturer: {vehicle.manufacturer}
              </p>
              <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">
                View Details
              </Link>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleFavorite('vehicle', vehicle.uid)}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2>Planets</h2>
      <div className="card-group">
        {planets.map(planet => (
          <div className="card" key={planet.uid}>
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <Link to={`/planets/${planet.uid}`} className="btn btn-primary">
                View Details
              </Link>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleFavorite('planet', planet.uid)}
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
