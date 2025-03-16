import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function UseState() {

  // Initialize count with 0
  const [count, setCount] = useState(0);

  // Handler to increment count
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Handler to decrement count
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <div></div>
        </nav>
      </header>

      <div className=''>
        <p>useState hook : The useState hook lets you add state to functional components effortlessly. It returns a pair: the current state and a function to update it. For example:</p>
        <pre>
          const [count, setCount] = useState(0);
        </pre>
        <p>Here, count is initialized to 0, and setCount lets you change its value. It's a smart, simple way to manage local component state without using classes.</p>
      </div>

      <hr />
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Counter project</h2>
        <div className="text-xl mb-4 text-center">Count: {count}</div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-200"
          >
            Decrement
          </button>
        </div>
      </div>




    </div>
  )
}

export default UseState