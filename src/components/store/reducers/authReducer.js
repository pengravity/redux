import { ACTIONS } from '../actions/actionTypes';

const authReducer = (state = true, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_AUTH: {
      return (state = !state);
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
