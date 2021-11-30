import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import s from './loading.css'
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';
import { truncate } from 'lodash-es';

const AppMetro = () => {
  let y = [];
  let x = [];
  
  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/metro")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          var temp = dataobj.get_on;
          var temp1 = dataobj.get_off;
          y.push(parseInt(temp - temp1));
          x.push(Number(dataobj.date_day));
        }
        
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y)
    
    

  }

  
  useEffect(() => {
  
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Metro data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"서울시 지하철 데이터 통계"
    },
    labels: x,
    xaxis: {
      // tickPlacement:'on',
      // type: 'datetime',
      // categories: x,
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
  const [series, setseries] = useState([{
    name: '일일 지하철 탑승객',
    data: y
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
    
  );
};




export default AppMetro
