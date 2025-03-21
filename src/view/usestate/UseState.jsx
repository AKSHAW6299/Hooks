import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UseState() {
  const [count, setCount] = useState(0);

  // Handlers for increment and decrement actions
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  }
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <div></div>
        </nav>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        {/* UseState explanation section */}
        <section className="mb-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            useState Hook:
          </h1>
          <p className="text-base text-gray-700 mb-2">
            The <code className="font-mono bg-gray-100 p-1 rounded">useState</code> hook lets you add state to functional components. It returns a pair: the current state and a function to update it.
          </p>
          <div className="bg-gray-100 text-green-500 p-2 rounded">
            <code className="block text-sm">
              const [count, setCount] = useState(0);
            </code>
          </div>
          <p className="mt-2 text-gray-700">
            Here, <span className="font-semibold">count</span> is initialized to <span className="font-semibold">0</span> and <span className="font-semibold">setCount</span> lets you update its value.
          </p>
        </section>


        {/* Counter Project Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Counter Project</h2>
          <div className="text-center mb-6">
            <span className="text-3xl font-semibold text-indigo-600">Count: {count}</span>
          </div>
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleIncrement}
              className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-200 shadow"
            >
              Increment
            </button>
            <button
              onClick={handleDecrement}
              className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200 shadow"
            >
              Decrement
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        <p>&copy; {new Date().getFullYear()} SkillUp Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UseState;
