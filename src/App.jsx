import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { SportsCareer } from "./pages/SportsCareer";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeContext";
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />}/>
              <Route path='/Experience' element={<Experience />} />
              <Route path='/SportsCareer' element={<SportsCareer />} />
              <Route path='/Contact' element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App