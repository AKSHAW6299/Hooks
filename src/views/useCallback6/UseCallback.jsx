import React, { useCallback, useState } from 'react'
import ChildComponent from '../../commonComponents/childComponent/ChildComponent'

function UseCallback() {
    const [count, setCount] = useState(0)

    // The reference of the function changes on every render
    // function handleClick() {
    //     setCount(count + 10)
    // }

    // keeps same function reference intil count changes (To freeze any function)
    const handleClick = useCallback(() => {
        setCount(count + 10)
    }, [count])


    return (
        <>
            <h1>Count is:: {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <hr />

            {/* [CASE-A] - normal scenario */}
            {/* Jab tak buttonName change nahi hoga ChildComponent re-render nahi hoga, hai na kamal ka! */}
            <div>
                <ChildComponent buttonName='Click me' />
            </div>



            {/* [CASE-B] - when we pass any function the React.memo will not able to stop the ChildComponent from re-rendering */}
            {/* <div>
                <ChildComponent buttonName='Click me' onClick={handleClick} />
            </div> */}
        </>
    )
}

export default UseCallback