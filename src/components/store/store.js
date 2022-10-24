import { createStore } from 'redux';

// Reducer
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SUBTRACT': {
      return state - 1;
    }
    case 'RESET': {
      return (state = 0);
    }

    case 'ADD': {
      return state + 1;
    }

    default: {
      return state;
    }
  }
};

// create a store
const store = createStore(countReducer);

export default store;
