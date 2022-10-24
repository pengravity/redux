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

export default authReducer;
