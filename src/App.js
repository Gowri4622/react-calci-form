import React from 'react'
import './App.css';
import Calculator from './Components/Calculator';
import Portfolio from './Components/Portfolio';
import Api from './Components/Api'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';



function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
            <Portfolio/>
            </React.Fragment>
          }/>
          <Route path="/calculator" element={
            <React.Fragment>
              <Header/>
             <Calculator/> 
            </React.Fragment>
          }/>
          <Route path="/Api" element={
            <React.Fragment>
              <Header/>
              <div className='title'>
                <h1>The Rick and Morty</h1>
              </div>
              
              <Api/>
            </React.Fragment>
          }/>
          
        </Routes>
      </Router>
    </React.Fragment>
    
     
    
  );
}

export default App;
