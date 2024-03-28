import React from 'react';
import { Hero, Navbar,Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from './components';
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes></Routes>
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
    </Router>
    
  )
}

export default App