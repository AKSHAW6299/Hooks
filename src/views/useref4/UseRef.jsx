import React, { useRef, useState } from 'react'


function UseRef() {

  const [count, setCount] = useState(0)


  // CASE - A
  // 1) normal variable the can not presist his original value [after every rerenders he is loosing his value]
  // let val = 1
  // function handleIncrement() {
  //   val = val + 1
  //   console.log('Value of val:: ', val);    
  //   setCount(count + 20)
  // }

  // 2) A variable created using useRef hook, the variale can presist his value even if infinite time rendering
  // noe the val variable will persist its value all time, does not matter our component is rensering or not
  let val = useRef(1)
  function handleIncrement() {
    val.current = val.current + 1
    console.log('Value of val:: ', val.current);
    setCount(count + 20)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default UseRef