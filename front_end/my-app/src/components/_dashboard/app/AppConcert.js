import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const AppConcert = () => {
  let y1 = [];
  let y2 = [];
  let y3 = [];
  let y4 = [];
  let y5 = [];
  let x = [];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/concert")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y1.push(parseInt(dataobj.perform_num));
          y2.push(parseInt(dataobj.opening_num));
          y3.push(parseInt(dataobj.showing_num));
          y4.push(parseInt(dataobj.sales));
          y5.push(parseInt(dataobj.book_num));
          x.push(parseInt(dataobj.date_mon));
        }
      })
      .catch(err => {
        console.log(err)
      });
    // console.log(x,y1,y2,y3)
    

  }

  
  useEffect(() => {
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Concert data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"전국 공연 데이터 통계"
    },
    // labels: x,
    xaxis: {
      // tickPlacement:'on',
      // type: 'datetime',
      categories: x,
      title: {
        text: "Month",
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
      name: 'perform_num',
      data: y1
    },
    {
      name: 'opening_num',
      data: y2
    },
    {
      name: 'showing_num',
      data: y3
    },
    {
      name: 'sales',
      data: y4
    },
    {
      name: 'book_num',
      data: y5
    },
  ])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppConcert
