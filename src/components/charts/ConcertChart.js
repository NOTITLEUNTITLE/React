import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const ConcertChart = () => {
  let y1 = [];
  let y2 = [];
  let y3 = [];
  let y4 = [];
  let y5 = [];
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/concert")
      .then(res => {
        if(res.status === 200){
          console.log("콘서트 데이터 가져았다.")
          for(const dataobj of res.data){
            y1.push((dataobj.perform_num));
            y2.push((dataobj.opening_num));
            y3.push((dataobj.showing_num));
            y4.push((dataobj.sales));
            y5.push((dataobj.book_num));
            x.push((dataobj.date_mon));
            // console.log(dataobj)
          }

        }else {
          console.log("콘서트 데이터 못 가져왔다.")
        }
      })
      .catch(err => {
        console.log(err)
      });
    // console.log("x,y",x,y1,y2,y3,y4,y5)
    
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
      text:"전국 공연 데이터 통계",
      margin: 40
    },
    xaxis: {
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
    // {
    //   name: 'sales',
    //   data: y4
    // },
    // {
    //   name: 'book_num',
    //   data: y5
    // },
  ])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};




export default ConcertChart;
