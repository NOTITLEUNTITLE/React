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
      id: 'apex chart',
      zoom: {
        autoScaleYaxis: true
      }
    },
    annotations: {
      xaxis: [{
        x: "200131",
        x2: "210831",
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
      text: "SSM data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"기업형 슈퍼마켓 데이터 통계",
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
      <Chart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
  );
};

export default SSMChart;
