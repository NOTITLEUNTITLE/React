import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const MarketChart = () => {
  let y_market1 = [];
  let y_market2 = [];
  let y_market3 = [];
  let y_market4 = [];
  let y_market5 = [];
  let y_market6 = [];
  let y_market7 = [];
  let y_market8 = [];
  
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/consumption ")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y_market1.push(dataobj.MARKET_NONFOOD_HOMEWARE_CULTURE);
          y_market2.push(dataobj.MARKET_NONFOOD_CLOTHING);
          y_market3.push(dataobj.MARKET_NONFOOD_DAILY);
          y_market4.push(dataobj.MARKET_NONFOOD_SPORT);
          y_market5.push(dataobj.MARKET_NONFOOD_CHANDLERY);
          y_market6.push(dataobj.MARKET_NONFOOD_SUBTOTAL);
          y_market7.push(dataobj.MARKET_FOOD);
          y_market8.push(dataobj.MARKET_TOTAL);
          
          x.push(dataobj.DATE_MON);
        }
      })
      .catch(err => {
        console.log(err)
      });
    console.log("x",x)
    

  }

  
  useEffect(() => {
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Market data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"대형마트 데이터 통계",
      margin: 40
    },
    xaxis: {
      categories: x,
      title: {
        text: "Day",
        style:{
          color: '#0f0'
        }
      }
    },
    yaxis: {
      style: {
        colors:['#ff0']
      },
      title:{
        text:"Amount",
        style:{
          color: '#0f0'
        }
      }
    }
  })

  const [series, setseries] = useState([
    {
      name: 'MARKET_NONFOOD_HOMEWARE_CULTURE',
      data: y_market1
    },
    {
      name: 'MARKET_NONFOOD_CLOTHING',
      data: y_market2
    },
    {
      name: 'MARKET_NONFOOD_DAILY',
      data: y_market3
    },
    {
      name: 'MARKET_NONFOOD_SPORT',
      data: y_market4
    },
    {
      name: 'MARKET_NONFOOD_CHANDLERY',
      data: y_market5
    },
    {
      name: 'MARKET_NONFOOD_SUBTOTAL',
      data: y_market6
    },
    {
      name: 'MARKET_FOOD',
      data: y_market7
    },
    {
      name: 'MARKET_TOTAL',
      data: y_market8
    },
  ])

  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};

export default MarketChart;
