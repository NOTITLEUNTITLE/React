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
      id: 'apex chart',
      zoom: {
        autoScaleYaxis: true
      }
    },
    annotations: {
      xaxis: [{
        x: "200303",
        x2: "210303",
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
      text: "Clothes data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"전국 의류 데이터 통계",
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
  const [series, setseries] = useState([{
    name: 'total',
    data: y,
    color: '#ff0000'
  }])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
  );
};

export default ClothesChart;
