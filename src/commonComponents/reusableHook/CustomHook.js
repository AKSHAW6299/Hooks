import { useState } from 'react';

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 10);
  const decrement = () => setCount((prev) => prev - 10);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
