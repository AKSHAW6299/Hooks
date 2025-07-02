import React from 'react'

// CASE - A
// We are wrapping our component to prevent unnecessary re-renders!
// React.memo -> wrap -> component -> ChildComponent component tabhi re-render hoga jab props change honge
// nahi to re-render nahi hoga!

// CASE -B

const ChildComponent = React.memo(function ChildComponent(props) {
    // console.log(props);
    console.log('child component got re-rendered again.');
    
    
  return (
    <div>
        <button>{props.buttonName}</button>
    </div>
  )
}
)
export default ChildComponent