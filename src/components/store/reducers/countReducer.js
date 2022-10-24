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

export default countReducer;
