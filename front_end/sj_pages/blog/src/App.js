
import React, {useState} from 'react';

import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Flask from './components/Flask';
import { Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Consum from './components/Consum';
import Culture from './components/Culture';
import Living from './components/Living';
import Metro from './components/Metro';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/main" element={ <Header /> } />
          <Route exact path="/living" element={ <Header />, <Living />} />
          <Route exact path="/metro" element={<Metro />} />
          <Route exact path="/culture" element={<Culture />} />
          <Route exact path="/consum" element={<Consum />} />
        </Routes>
        
        
        
        <Flask />
      </div>
    </BrowserRouter>
  );
}





export default App;
