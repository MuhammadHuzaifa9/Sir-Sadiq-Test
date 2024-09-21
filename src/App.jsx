
import { Route, Routes } from 'react-router'
import './App.css'

import Home from './pages/home'
import CardDetails from './pages/CardDetails'



function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Home" element={<Home />}/>
        
        <Route path="/Home/:id" element={<CardDetails />} />
        
      </Routes>
        
    </>
  )
}

export default App
