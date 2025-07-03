import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/usestate">
        <button>Go to useState</button>
      </Link> <br />

      <Link to="/useeffect">
        <button>Go to useEffect</button>
      </Link> <br />

      <Link to="/usereducer">
        <button>Go to useReducer</button>
      </Link> <br />
      
      <Link to="/useref">
        <button>Go to useRef</button>
      </Link> <br />

      <Link to="/useMemo">
        <button>Go to useMemo</button>
      </Link> <br />

      <Link to="/useCallback">
        <button>Go to useCallback</button>
      </Link> <br />

       <Link to="/customhook">
        <button>Go to Custom hook</button>
      </Link> <br />
    </div>
  );
}

export default Home;
