import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const MovieChart = () => {
  let y1 = [];
  let y2 = [];
  let y3 = [];
  let y4 = [];
  let y5 = [];
  let y6 = [];
  let x = [""];
  

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/movie")
      .then(res => {
        if(res.status === 200){
          console.log("영화 데이터 가져왔다.")
          for(const dataobj of res.data){
            y1.push(Number(dataobj.korea_sales));
            y2.push(Number(dataobj.korea_audience_num));
            y3.push(Number(dataobj.foreign_audience_num));
            y4.push(Number(dataobj.foreign_sales));
            y5.push(Number(dataobj.total_sales));
            y6.push(Number(dataobj.total_audience));
            x.push((dataobj.date_day));
          }
        }else{
          console.log("영화 데이터 못 가져왔다.")
        }
        
      })
      .catch(err => {
        console.log(err)
      });
    
    

  }

  
  useEffect(() => {
    chart();
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart',
      zoom: {
        autoScaleYaxis: true
      }
    },
    annotations: {
      xaxis: [{
        x: "200119",
        x2: "211030",
        borderColor: '#999',
        yAxisIndex: 0,
        fillColor: '#B3F7CA',
        label: {
          rotate: -45,
          show: true,
          text: '국내 첫 확진자',
          style: {
            color: "#fff",
            background: '#775DD0',
            fontSize: "16"
          }
        }
      }]
    },
    // annotations: {
    //   yaxis: [
    //     {
    //       y: 150,
    //       borderColor: "#00E396",
    //       label: {
    //         borderColor: "#00E396",
    //         style: {
    //           color: "#fff",
    //           background: "#00E396"
    //         },
    //         text: "Y Axis Annotation"
    //       }
    //     }
    //   ],
    // },
    title:{
      text: "Movie data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"전국 영화 데이터 통계",
      margin: 40
    },
    xaxis: {
      // {},
      tickAmount: 10,
      labels: {
        show: true,
        rotate: 0,
        // formatter: (val) => formatDateTo(val), 
      },
      // labels: [1,2,3,4],
      type: "category",
      categories: x,
      title: {
        text: "YYMMDD",
        style:{
          fontSize: '24',
          color: '#000'
        }
      }, 
    },
    yaxis: {
      style: {
        colors:['#ff0']
      },
      title:{
        text:"Amount",
        style:{
          fontSize: '24',
          color: '#000'
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
      <Chart options={options} series={series} type="line" width={1400} height={900} />
    </div>
  );
};




export default MovieChart;
