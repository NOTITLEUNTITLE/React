import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const SSMChart = () => {
    let y_ssm1 = [];
    let y_ssm2 = [];
    let y_ssm3 = [];
    let y_ssm4 = [];
    let y_ssm5 = [];
    let y_ssm6 = [];
    let y_ssm7 = [];
    let y_ssm8 = [];
  
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/consumption ")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
            y_ssm1.push(dataobj.SSM_NONFOOD_DAILY);
            y_ssm2.push(dataobj.SSM_NONFOOD_CHANDLERY);
            y_ssm3.push(dataobj.SSM_NONFOOD_SUBTOTAL);
            y_ssm4.push(dataobj.SSM_FOOD_AGRICULTURAL_MARINE_LIVESTOCK);
            y_ssm5.push(dataobj.SSM_FOOD_FRESH);
            y_ssm6.push(dataobj.SSM_FOOD_PROCESSED);
            y_ssm7.push(dataobj.SSM_FOOD_SUBTOTAL);
            y_ssm8.push(dataobj.SSM_TOTAL);
            
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
      text: "SSM data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"기업형 수퍼마켓 데이터 통계",
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
    name: 'SSM_NONFOOD_DAILY',
    data: y_ssm1
    },
    {
      name: 'SSM_NONFOOD_CHANDLERY',
      data: y_ssm2
    },
    {
      name: 'SSM_NONFOOD_SUBTOTAL',
      data: y_ssm3
    },
    {
      name: 'SSM_FOOD_AGRICULTURAL_MARINE_LIVESTOCK',
      data: y_ssm4
    },
    {
      name: 'SSM_FOOD_FRESH',
      data: y_ssm5
    },
    {
      name: 'SSM_FOOD_PROCESSED',
      data: y_ssm6
    },
    {
      name: 'SSM_FOOD_SUBTOTAL',
      data: y_ssm7
    },
    {
      name: 'SSM_TOTAL',
      data: y_ssm8
    },
  ])

  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};

export default SSMChart;
