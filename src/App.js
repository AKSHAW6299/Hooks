import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import UseState from './views/usestate1/UseState'
import UseEffect from './views/useeffect2/UseEffect'
import UseReducer from './views/usereducer3/UseReducer'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usereducer" element={<UseReducer />} />
      </Routes>
    </Router>
  )
}

export default App