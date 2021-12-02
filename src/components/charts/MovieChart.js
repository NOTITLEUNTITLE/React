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
  let year = [];
  let month = [];
  let day = [];
  let temp2 = [];
  let temp3 = [];
  let temp4 = [];
  let temp5 = [];
  let temp6 = [];
  let temp7 = [];
  let temp = [];
  let acc1 = 0;
  let acc2 = 0;
  let acc3 = 0;
  let acc4 = 0;
  let acc5 = 0;
  let acc6 = 0;
  let temp1 = [''];
  

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
            year.push(dataobj.date_day.substring(0,2))
            month.push(dataobj.date_day.substring(2,4))
            day.push(dataobj.date_day.substring(4,6))
          }
          for(var i=1; i<year.length; i++){
            if(month[i] === month[i-1]){
              acc1 = acc1 + Number(y1[i])
              acc2 = acc2 + Number(y2[i])
              acc3 = acc3 + Number(y3[i])
              acc4 = acc4 + Number(y4[i])
              acc5 = acc5 + Number(y5[i])
              acc6 = acc6 + Number(y6[i])
            }
            else{
              temp1.push(String(year[i])+String(month[i-1]));
              temp2.push(acc1);
              temp3.push(acc2);
              temp4.push(acc3);
              temp5.push(acc4);
              temp6.push(acc5);
              temp7.push(acc6);
              
              acc1 = 0;
              acc2 = 0;
              acc3 = 0;
              acc4 = 0;
              acc5 = 0;
              acc6 = 0;
            }
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
        x: "2001",
        x2: "2108",
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
      categories: temp1,
      title: {
        text: "YYMM",
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
      data: temp2
    },
    {
      name: 'korea_audience_num',
      data: temp3
    },
    {
      name: 'foreign_audience_num',
      data: temp4
    },
    {
      name: 'foreign_sales',
      data: temp5
    },
    {
      name: 'total_sales',
      data: temp6
    },
    {
      name: 'total_audience',
      data: temp7
    },
  ])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
  );
};




export default MovieChart;
