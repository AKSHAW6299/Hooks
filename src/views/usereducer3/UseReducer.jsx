import React, { useReducer } from 'react'


function UseReducer() {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 20

      case 'DECREMENT':
        return state - 20

      case 'RESET':
        return 0

      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)


  return (
    <>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <h1>useReducer hook Count:: {count}</h1>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </>
  )
}

export default UseReducer