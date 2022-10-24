import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state);
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

  return (
    <div className='container --center-all --my2 --py2'>
      <button className='--btn --btn-danger'>Log Out</button>
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
        <button onClick={handleAdd} className='substract --btn --btn-primary'>
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
