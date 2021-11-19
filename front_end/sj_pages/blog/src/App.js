import logo from './logo.svg';
import './App.css';
import Consumption from './component/card_consumption';
import Culture from './component/card_culture';
import Living from './component/card_living';
import Metro from './component/card_metro';
import React, { useState, Component } from 'react';

class App extends Component {
  render(){
    return (
      <>
        <div className="index-title"><a href='http://www.naver.com'>COVID-19 Data</a></div>
        <section className="card-area">        
          <Consumption></Consumption>
          <Culture></Culture>
          <Living></Living>
          <Metro></Metro>
        </section>
      </>
    );
  }
}

export default App;
