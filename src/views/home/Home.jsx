import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/usestate">
        <button>Go to useState</button>
      </Link>
      <Link to="/useeffect">
        <button>Go to useEffect</button>
      </Link>
      <Link to="/usereducer">
        <button>Go to useReducer</button>
      </Link>
      <Link to="/useref">
        <button>Go to useRef</button>
      </Link>
    </div>
  );
}

export default Home;
