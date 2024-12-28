import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Routes,Route } from "react-router-dom";
import Header from './Header';
import Whoare from './Whoare';
import Contact from './Contact';
import Home from './Home';
import WhyUs from './WhyUs';
import WhoworkWith from './WhoworkWith';
import WhatWEDo from './WhatWEDo';







function App() {
  

  return (
    <>
      <div>
      <Header/>
      
      <Routes>
       <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Whoare" element={<Whoare/>}/>
        <Route path='/why-us' element ={<WhyUs/>} />
        <Route path='/who-we-work-with' element ={<WhoworkWith/>} />
        <Route path='/WhatWEDo' element ={<WhatWEDo/>} />
        
        
      </Routes>
   </div>
    </>
  )
}

export default App
