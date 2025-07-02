import React from 'react'


// We are wrapping our component to prevent unnecessary re-renders!

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