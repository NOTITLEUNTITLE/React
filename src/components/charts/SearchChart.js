import React, {useState,useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const SearchChart = () => {
  let y1 = [];
  let y2 = [];
  let y3 = [];
  let y4 = [];
  let y5 = [];
  let y6 = [];
  let y7 = [];
  let y8 = [];
  let y9 = [];
  let y10 = [];
  let y11 = [];
  let y12 = [];
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/naver_data ")
      .then(res => {
        if(res.status === 200){
          console.log(res)
          for(const dataobj of res.data){
            y1.push(parseFloat(dataobj.amenity));
            y2.push(parseFloat(dataobj.beauty));
            y3.push(parseFloat(dataobj.book));
            y4.push(parseFloat(dataobj.childbirth));
            y5.push(parseFloat(dataobj.duty_free));
            y6.push(parseFloat(dataobj.fashion_accessories));
            y7.push(parseFloat(dataobj.fashion_clothes));
            y8.push(parseFloat(dataobj.food));
            y9.push(parseFloat(dataobj.furniture));
            y10.push(parseFloat(dataobj.home_appliance));
            y11.push(parseFloat(dataobj.living_health));
            y12.push(parseFloat(dataobj.sport_leisure));
            x.push((dataobj.date_day));
          }
        }else{
          console.log("no data");
        }
        
      })
      .catch(err => {
        console.log(err)
      });
    console.log('x',x)
    

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
      text: "Living data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"네이버 분야별 데이터 통계",
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
      name: 'amenity',
      data: y1
    },
    {
      name: 'beauty',
      data: y2
    },
    {
      name: 'book',
      data: y3
    },
    {
      name: 'childbirth',
      data: y4
    },
    {
      name: 'duty_free',
      data: y5,
      type: 'column',
    },
    {
      name: 'fashion_accessories',
      data: y6
    },
    {
      name: 'fashion_clothes',
      data: y7
    },
    {
      name: 'food',
      data: y8
    },
    {
      name: 'furniture',
      data: y9
    },
    {
      name: 'home_appliance',
      data: y10
    },
    {
      name: 'living_health',
      data: y11
    },
    {
      name: 'sport_leisure',
      data: y12
    },
  ])

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
  );
};

export default SearchChart;
