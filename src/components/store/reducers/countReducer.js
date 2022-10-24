import { ACTIONS } from '../actions/actionTypes';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS.SUBTRACT: {
      return state - 1;
    }
    case ACTIONS.RESET: {
      return (state = 0);
    }

    case ACTIONS.ADD: {
      return state + 1;
    }

    case ACTIONS.ADD_NUMBER: {
      return state + action.payload;
    }

    default: {
      return state;
    }
  }
};

export default countReducer;
