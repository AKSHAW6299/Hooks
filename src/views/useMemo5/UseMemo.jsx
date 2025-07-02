import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  // Create a expensive(time/memory consuming) task
  function expensiveTask(num) {
    console.log('Inside expensive task');
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }
  // When the state(count) changed our component is re-rendering every time,
  // due to this the expensiveTask() function gets called every time, that's why it is taking that much time.

  // let doubleValue = expensiveTask(4)
  let doubleValue = useMemo(() => expensiveTask(input), [input])


  return (
    <>
      <h1>Count:: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Double value:: {doubleValue}</h1>
      <input 
        type="number"
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      
      />
    </>
  )
}

export default UseMemo
