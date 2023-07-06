import { EventEmitter } from 'events';

// Create a new event emitter
const eventEmitter = new EventEmitter();

// Initial state
let state = {
  people: [],
  vehicles: [],
  planets: [],
};

// Action types
const ActionTypes = {
  FETCH_PEOPLE: 'FETCH_PEOPLE',
  FETCH_VEHICLES: 'FETCH_VEHICLES',
  FETCH_PLANETS: 'FETCH_PLANETS',
  // Other action types...
};

// Action creators
const Actions = {
  fetchPeople() {
    return fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        const peopleData = data.results.map(person => ({
          uid: person.uid,
          name: person.name,
        }));
        return peopleData;
      });
  },

  fetchVehicles() {
    return fetch('https://swapi.dev/api/vehicles/')
      .then(response => response.json())
      .then(data => {
        const vehiclesData = data.results.map(vehicle => ({
          uid: vehicle.uid,
          name: vehicle.name,
        }));
        return vehiclesData;
      });
  },

  fetchPlanets() {
    return fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => {
        const planetsData = data.results.map(planet => ({
          uid: planet.uid,
          name: planet.name,
        }));
        return planetsData;
      });
  },
};

// Getters
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

// Custom hook to access the store
const useStore = () => {
  const fetchPeople = () => {
    return Actions.fetchPeople().then(peopleData => {
      state = {
        ...state,
        people: peopleData,
      };
      eventEmitter.emit('change');
      return peopleData;
    });
  };

  const fetchVehicles = () => {
    return Actions.fetchVehicles().then(vehiclesData => {
      state = {
        ...state,
        vehicles: vehiclesData,
      };
      eventEmitter.emit('change');
      return vehiclesData;
    });
  };

  const fetchPlanets = () => {
    return Actions.fetchPlanets().then(planetsData => {
      state = {
        ...state,
        planets: planetsData,
      };
      eventEmitter.emit('change');
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
