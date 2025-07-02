import React, { useState } from 'react'

function UseCallback() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Count is:: {count}</h1>
            <button onClick={() => setCount(count + 50)}>Increment</button>
        </>
    )
}

export default UseCallback