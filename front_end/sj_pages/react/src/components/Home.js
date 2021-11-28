// import './card.css';
import Consumption from './card_consumption';
import Culture from './card_culture';
import Living from './card_living';
import Metro from './card_metro';
import React, { Component } from 'react';


class Home extends Component {
  render(){
    return (
        <div className='cards'>
            <div className="index-title"><a href='http://www.covid19board.kr/'>COVID-19 Data</a></div>
            <section className="card-area">        
            <Consumption></Consumption>
            <Culture></Culture>
            <Living></Living>
            <Metro></Metro>
            </section>
        </div>
    );
  }
}

export default Home;
