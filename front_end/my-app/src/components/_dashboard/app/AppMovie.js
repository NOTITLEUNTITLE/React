import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const AppMovie = () => {
  let y1 = [];
  let y2 = [];
  let y3 = [];
  let y4 = [];
  let y5 = [];
  let y6 = [];
  let x = [];
  let newx = [];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/movie")
      .then(res => {
        if(res.status === 200){
          console.log("res", res)
          for(const dataobj of res.data){
            y1.push(parseInt(dataobj.korea_sales));
            y2.push(parseInt(dataobj.korea_audience_num));
            y3.push(parseInt(dataobj.foreign_audience_num));
            y4.push(parseInt(dataobj.foreign_sales));
            y5.push(parseInt(dataobj.total_sales));
            y6.push(parseInt(dataobj.total_audience));
            x.push(parseInt(dataobj.date_day));
          }
        }else{
          console.log("no data")
        }
        
      })
      .catch(err => {
        console.log(err)
      });
    console.log("x",x)
    newx = x.map((e) => {return e.toString()})
    console.log(newx)
    

  }

  
  useEffect(() => {
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Movie data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"전국 영화 데이터 통계"
    },
    // labels: x,
    xaxis: {
      // tickPlacement:'on',
      // type: 'datetime',
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
      name: 'korea_sales',
      data: y1
    },
    {
      name: 'korea_audience_num',
      data: y2
    },
    {
      name: 'foreign_audience_num',
      data: y3
    },
    {
      name: 'foreign_sales',
      data: y4
    },
    {
      name: 'total_sales',
      data: y5
    },
    {
      name: 'total_audience',
      data: y6
    },
  ])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppMovie
