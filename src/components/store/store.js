import { createStore, combineReducers } from 'redux';

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

    case 'ADD_NUMBER': {
      return state + action.payload;
    }

    default: {
      return state;
    }
  }
};

const authReducer = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTH': {
      return (state = !state);
    }

    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  count: countReducer,
  isLoggedIn: authReducer,
});

// create a store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
