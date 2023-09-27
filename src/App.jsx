import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from "./components/index"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Azhar from "./components/azhartasks"
import Ali from "./components/alitasks"


function App() {

  return (

    <div >
     

      <Router>
      <Routes>
      <Route path="/" element={<Index/>} />

        <Route path="/assignment-azhar" element={<Azhar />} />
        <Route path="/assignment-ali" element={<Ali />} />

      </Routes>
    </Router>
    </div>

  )
}

export default App
