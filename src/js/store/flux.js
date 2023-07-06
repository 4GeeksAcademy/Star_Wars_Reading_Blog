import { EventEmitter } from 'events';
import axios from 'axios'; // Import axios

const eventEmitter = new EventEmitter();

let state = {
  people: [],
  vehicles: [],
  planets: [],
};

const ActionTypes = {
  FETCH_PEOPLE: 'FETCH_PEOPLE',
  FETCH_VEHICLES: 'FETCH_VEHICLES',
  FETCH_PLANETS: 'FETCH_PLANETS',
};

const Actions = {
  fetchPeople() {
    return axios
      .get('https://swapi.dev/api/people/')
      .then(response => {
        const peopleData = response.data.results.map(person => ({
          uid: person.url,
          name: person.name,
          gender: person.gender,
          hairColor: person.hair_color,
          eyeColor: person.eye_color,
        }));
        state = {
          ...state,
          people: peopleData,
        };
        eventEmitter.emit('change');
        return peopleData;
      });
  },

  fetchVehicles() {
    return axios
      .get('https://swapi.dev/api/vehicles/')
      .then(response => {
        const vehiclesData = response.data.results.map(vehicle => ({
          uid: vehicle.url,
          name: vehicle.name,
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
        }));
        state = {
          ...state,
          vehicles: vehiclesData,
        };
        eventEmitter.emit('change');
        return vehiclesData;
      });
  },

  fetchPlanets() {
    return axios
      .get('https://swapi.dev/api/planets/')
      .then(response => {
        const planetsData = response.data.results.map(planet => ({
          uid: planet.url,
          name: planet.name,
        }));
        state = {
          ...state,
          planets:planetsData,
        };
        eventEmitter.emit('change');
        return planetsData;
      });
  },
};

const Store = {
  getPeople() {
    return state.people;
  },

  getVehicles() {
    return state.vehicles;
  },

  getPlanets() {
    return state.planets;
  },
};

const useStore = () => {
  const fetchPeople = () => {
    return Actions.fetchPeople().then(peopleData => {
      return peopleData;
    });
  };

  const fetchVehicles = () => {
    return Actions.fetchVehicles().then(vehiclesData => {
      return vehiclesData;
    });
  };

  const fetchPlanets = () => {
    return Actions.fetchPlanets().then(planetsData => {
      return planetsData;
    });
  };

  return {
    fetchPeople,
    fetchVehicles,
    fetchPlanets,
  };
};

export { Actions, Store, eventEmitter, useStore };
