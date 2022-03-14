import React from 'react'
import { Routes, Route} from "react-router-dom"

import {About} from './containers/AboutMe/About';
import { Contact } from './containers/Contact/Contact';
import {Home} from "./containers/Homepage/Home"
import PortfolioListing from './containers/Portfolio/PortfolioListing';
import { Skill } from './containers/Skills/Skills';

function AnimatedRoutes() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/skill' element={<Skill />} />
      <Route path='/works' element={<PortfolioListing />} />
      <Route path="*" element={null} />
    </Routes>
  )
}

export default AnimatedRoutes