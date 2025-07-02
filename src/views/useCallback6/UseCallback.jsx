import React, { useState } from 'react'
import ChildComponent from '../../commonComponents/childComponent/ChildComponent'

function UseCallback() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Count is:: {count}</h1>
            <button onClick={() => setCount(count + 50)}>Increment</button>
            <hr />

            {/* For performance optimization */}
            {/* Jab tak buttonName change nahi hoga ChildComponent re-render nahi hoga, hai na kamal ka! */}
            <div>
                <ChildComponent buttonName='Click me' />
            </div>
            <hr />
        </>
    )
}

export default UseCallback