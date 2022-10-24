import { useSelector, useDispatch } from 'react-redux';
import {
  handleAdd,
  handleAddNumber,
  handleReset,
  handleSubtract,
  toggleAuth,
} from './store/actions/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className='container --center-all --my2 --py2 --bg-light-blue'>
      <button
        onClick={() => dispatch(toggleAuth())}
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
              onClick={() => dispatch(handleSubtract())}
              className='substract --btn --btn-danger'
            >
              Subtract
            </button>
            <button
              onClick={() => dispatch(handleReset())}
              className='substract --btn '
            >
              Reset
            </button>
            <button
              onClick={() => dispatch(handleAdd())}
              className='substract --btn --btn-primary'
            >
              Add
            </button>
            <button
              onClick={() => dispatch(handleAddNumber(10))}
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
