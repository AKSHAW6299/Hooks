import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const btn = "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2";

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>

      <div className="flex flex-col space-y-3 mt-4">

        <Link to="/usestate">
          <button className={btn}>Go to useState</button>
        </Link>

        <Link to="/usereducer">
          <button className={btn}>Go to useReducer</button>
        </Link>

        <Link to="/useeffect">
          <button className={btn}>Go to useEffect</button>
        </Link>

        <Link to="/useref">
          <button className={btn}>Go to useRef</button>
        </Link>

        <Link to="/useMemo">
          <button className={btn}>Go to useMemo</button>
        </Link>

        <Link to="/useCallback">
          <button className={btn}>Go to useCallback</button>
        </Link>

      </div>
    </div>
  );
}

export default Home;
