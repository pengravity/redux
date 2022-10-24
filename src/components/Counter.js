import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({
      type: 'ADD',
    });
  };

  const handleSubtract = () => {
    dispatch({
      type: 'SUBTRACT',
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  const handleAddNumber = (amount) => {
    dispatch({
      type: 'ADD_NUMBER',
      payload: amount,
    });
  };

  const toggleAuth = () => {
    dispatch({
      type: 'TOGGLE_AUTH',
    });
  };

  return (
    <div className='container --center-all --my2 --py2 --bg-light-blue'>
      <button onClick={toggleAuth} className='--btn --btn-danger'>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <hr />

      {!isLoggedIn ? (
        <p>Please Log in</p>
      ) : (
        <>
          <h1>Counter </h1>
          <h1 className='count'>{count}</h1>
          <div className='buttons --flex-center'>
            <button
              onClick={handleSubtract}
              className='substract --btn --btn-danger'
            >
              Subtract
            </button>
            <button onClick={handleReset} className='substract --btn '>
              Reset
            </button>
            <button
              onClick={handleAdd}
              className='substract --btn --btn-primary'
            >
              Add
            </button>
            <button
              onClick={() => handleAddNumber(10)}
              className='substract --btn --btn-primary'
            >
              Add 10
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;
