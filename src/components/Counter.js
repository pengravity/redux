import { useSelector, useDispatch } from 'react-redux';

import { ADD, ADD_NUMBER, SUBTRACT, RESET } from '../store/slice/counterSlice';
import { TOGGLE_AUTH } from '../store/slice/authSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className='container --center-all --my2 --py2 --bg-light-blue'>
      <button
        onClick={() => dispatch(TOGGLE_AUTH())}
        className='--btn --btn-danger'
      >
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
              onClick={() => dispatch(SUBTRACT())}
              className=' --btn --btn-danger'
            >
              Subtract
            </button>
            <button onClick={() => dispatch(RESET())} className=' --btn '>
              Reset
            </button>
            <button
              onClick={() => dispatch(ADD())}
              className=' --btn --btn-primary'
            >
              Add
            </button>
            <button
              onClick={() => dispatch(ADD_NUMBER(10))}
              className=' --btn --btn-primary'
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
