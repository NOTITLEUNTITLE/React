import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const ClothesChart = () => {
  let y = [];
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/clothes")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
          y.push(Number(dataobj.total));
          x.push((dataobj.date_time));
        }
      })
      .catch(err => {
        console.log(err)
      });
    // console.log(x,y)
    

  }

  
  useEffect(() => {
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    // theme: {
    //   mode:'dark'
    // },
    title:{
      text: "Clothes data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"전국 의류 데이터 통계",
      margin: 40
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
    name: 'total',
    data: y,
    color: '#ff0000'
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};

export default ClothesChart;
