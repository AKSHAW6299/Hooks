import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(count - 10)}>Decrement</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 10)}>Increment</button>
            <button onClick={() => setCount(0)}>RESET</button>
        </>
    )
}

export default UseState