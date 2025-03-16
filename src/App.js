import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UseState from './view/usestate/UseState'
import Home from './view/home/Home'
import UseReducer from './view/usereducer/UseReducer'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usereducer" element={<UseReducer />} />
      </Routes>
    </Router>
  )
}

export default App