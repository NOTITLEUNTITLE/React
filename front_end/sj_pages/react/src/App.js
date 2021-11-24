/* eslint-disable */

import React from 'react';
import './App.css';
import Flask from './components/Flask';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Consum from './components/Consum';
import Culture from './components/Culture';
import Living from './components/Living';
import Metro from './components/Metro';
// import routes from './routes';

function App() {
  return (
      <div className="App">
          {/* <Header /> */}
        <Router>
          <Routes>
            <Route exact path="/living" element={<Sidebar />} />
            <Route exact path="/metro" element={<Sidebar />} />
            <Route exact path="/culture" element={<Sidebar />} />
            <Route exact path="/consum" element={<Sidebar />} />
          </Routes>
          <div className="chart-area">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/living" element={<Living />} />
              <Route exact path="/metro" element={<Metro />} />
              <Route exact path="/culture" element={<Culture />} />
              <Route exact path="/consum" element={<Consum />} />
            </Routes>
          </div>
        </Router>
        {/* <Flask /> */}
      </div>
  );
}

export default App;
