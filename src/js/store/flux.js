import { EventEmitter } from 'events';
import Dispatcher from './Dispatcher';

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
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.FETCH_PEOPLE,
          payload: data.results,
        });
      });
  },

  fetchVehicles() {
    fetch('https://swapi.dev/api/vehicles/')
      .then(response => response.json())
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.FETCH_VEHICLES,
          payload: data.results,
        });
      });
  },

  fetchPlanets() {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.FETCH_PLANETS,
          payload: data.results,
        });
      });
  },
};

// Handle actions
Dispatcher.register(action => {
  switch (action.type) {
    case ActionTypes.FETCH_PEOPLE:
      state = {
        ...state,
        people: action.payload,
      };
      eventEmitter.emit('change');
      break;

    case ActionTypes.FETCH_VEHICLES:
      state = {
        ...state,
        vehicles: action.payload,
      };
      eventEmitter.emit('change');
      break;

    case ActionTypes.FETCH_PLANETS:
      state = {
        ...state,
        planets: action.payload,
      };
      eventEmitter.emit('change');
      break;

    // Handle other actions...

    default:
      break;
  }
});

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

export { Actions, Store, eventEmitter };
