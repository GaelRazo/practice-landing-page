import React from 'react';
import { Hero, Navbar,Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from './components';
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Routes } from 'react-router-dom';
import Nosotros from './screens/Nosotros';



const App = () => {
  return (
    
      <div>
        <Navbar />
        <Hero />
        <Companies/>
        <Courses />
        <Achievement />
        <Categories />
        <Feedback />
        <CTA />
        <Footer />
      </div>
    
  )
}

export default App