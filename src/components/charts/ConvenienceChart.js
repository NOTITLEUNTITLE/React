import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const ConvenienceChart = () => {
    let y_convenience1 = [];
    let y_convenience2 = [];
    let y_convenience3 = [];
    let y_convenience4 = [];
    let y_convenience5 = [];
    let y_convenience6 = [];
    let y_convenience7 = [];
    let y_convenience8 = [];
  
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/consumption ")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
            y_convenience1.push(dataobj.CONVENIENCE_NONFOOD_DAILY);
            y_convenience2.push(dataobj.CONVENIENCE_NONFOOD_CHANDLERY);
            y_convenience3.push(dataobj.CONVENIENCE_NONFOOD_CIGARETTE_ETC);
            y_convenience4.push(dataobj.CONVENIENCE_NONFOOD_SUBTOTAL);
            y_convenience5.push(dataobj.CONVENIENCE_FOOD_BEVERAGE_PROCESSED);
            y_convenience6.push(dataobj.CONVENIENCE_FOOD_INSTANT_FRESH);
            y_convenience7.push(dataobj.CONVENIENCE_FOOD_SUBTOTAL);
            y_convenience8.push(dataobj.CONVENIENCE_TOTAL);
            
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
      text: "Convenience data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"편의점 데이터 통계",
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
    name: 'CONVENIENCE_NONFOOD_DAILY',
    data: y_convenience1
    },
    {
      name: 'CONVENIENCE_NONFOOD_CHANDLERY',
      data: y_convenience2
    },
    {
      name: 'CONVENIENCE_NONFOOD_CIGARETTE_ETC',
      data: y_convenience3
    },
    {
      name: 'CONVENIENCE_NONFOOD_SUBTOTAL',
      data: y_convenience4
    },
    {
      name: 'CONVENIENCE_FOOD_BEVERAGE_PROCESSED',
      data: y_convenience5
    },
    {
      name: 'CONVENIENCE_FOOD_INSTANT_FRESH',
      data: y_convenience6
    },
    {
      name: 'CONVENIENCE_FOOD_SUBTOTAL',
      data: y_convenience7
    },
    {
      name: 'CONVENIENCE_TOTAL',
      data: y_convenience8
    },
  ])

  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};

export default ConvenienceChart;
