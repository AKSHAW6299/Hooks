import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import UseState from './views/usestate1/UseState'
import UseEffect from './views/useeffect2/UseEffect'
import UseReducer from './views/usereducer3/UseReducer'
import UseRef from './views/useref4/UseRef'
import UseMemo from './views/useMemo5/UseMemo'
import UseCallback from './views/useCallback6/UseCallback'
import Counter from './views/customhook7/Counter'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/customhook" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App