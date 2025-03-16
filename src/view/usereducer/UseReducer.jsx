import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

function UseReducer() {

  // const [count, setCount] = useState(0);

  // for useReducer hook
  // defining reducer function
  const reducer = (state, action) => {
    console.log('state and action :', state, action);

    if (action.type === 'INCREMENT') {
      return state + 1;
    }
    if (action.type === 'DECREMENT') {
      return state - 1;
    }
  }

  // initializing useReducer hook
  const [count, dispatch] = useReducer(reducer, 0)


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

      <div className='text-center text-green-500 mt-6'>
        <h1 className="text-2xl font-semibold mb-4">useReducer hook: Manage complex state with ease</h1>
      </div>

      {/* Counter Project Section */}
      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Counter Project</h2>
        <div className="text-center mb-6">
          <span className="text-3xl font-semibold text-indigo-600">Count: {count}</span>
        </div>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-200 shadow"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200 shadow"
          >
            Decrement
          </button>
        </div>
      </section>




    </div>
  )
}

export default UseReducer