import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className="bg-amber-100 h-svw">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
