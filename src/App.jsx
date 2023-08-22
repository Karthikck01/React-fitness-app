import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Career from './pages/Career';
import About from './pages/About';
import Contact from './pages/Contact';
import NavbarComponent from './components/Navbar/Navbar';

import './App.css'

function App() {


  return (
    <>
    <NavbarComponent/>
    <Home/>
    <Career/>
    <About/>
    <Contact/>
      
    </>
  )
}

export default App
