import React from 'react';
import useCounter from '../../commonComponents/reusableHook/CustomHook';

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>{' '}
      <button onClick={decrement}>Decrement</button>{' '}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
