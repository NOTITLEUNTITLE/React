import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const AppConsume = () => {
  let y_market1 = [];
  let y_market2 = [];
  let y_market3 = [];
  let y_market4 = [];
  let y_market5 = [];
  let y_market6 = [];
  let y_market7 = [];
  let y_market8 = [];
  
  let y_depart1 = [];
  let y_depart2 = [];
  let y_depart3 = [];
  let y_depart4 = [];
  let y_depart5 = [];
  let y_depart6 = [];
  let y_depart7 = [];
  let y_depart8 = [];
  let y_depart9 = [];
  let y_depart10 = [];

  let y_convenience1 = [];
  let y_convenience2 = [];
  let y_convenience3 = [];
  let y_convenience4 = [];
  let y_convenience5 = [];
  let y_convenience6 = [];
  let y_convenience7 = [];
  let y_convenience8 = [];

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
          y_market1.push(dataobj.MARKET_NONFOOD_HOMEWARE_CULTURE);
          y_market2.push(dataobj.MARKET_NONFOOD_CLOTHING);
          y_market3.push(dataobj.MARKET_NONFOOD_DAILY);
          y_market4.push(dataobj.MARKET_NONFOOD_SPORT);
          y_market5.push(dataobj.MARKET_NONFOOD_CHANDLERY);
          y_market6.push(dataobj.MARKET_NONFOOD_SUBTOTAL);
          y_market7.push(dataobj.MARKET_FOOD);
          y_market8.push(dataobj.MARKET_TOTAL);
          y_depart1.push(dataobj.DEPARTMENT_NONFOOD_CHANDLERY);
          y_depart2.push(dataobj.DEPARTMENT_NONFOOD_WOMENSUITS);
          y_depart3.push(dataobj.DEPARTMENT_NONFOOD_WOMENCASUAL);
          y_depart4.push(dataobj.DEPARTMENT_NONFOOD_MENCLOTHING);
          y_depart5.push(dataobj.DEPARTMENT_NONFOOD_KIDS_SPORT);
          y_depart6.push(dataobj.DEPARTMENT_NONFOOD_HOMEWARE);
          y_depart7.push(dataobj.DEPARTMENT_NONFOOD_LUXURY);
          y_depart8.push(dataobj.DEPARTMENT_NONFOOD_SUBTOTAL);
          y_depart9.push(dataobj.DEPARTMENT_FOOD);
          y_depart10.push(dataobj.DEPARTMENT_TOTAL);
          y_convenience1.push(dataobj.CONVENIENCE_NONFOOD_DAILY);
          y_convenience2.push(dataobj.CONVENIENCE_NONFOOD_CHANDLERY);
          y_convenience3.push(dataobj.CONVENIENCE_NONFOOD_CIGARETTE_ETC);
          y_convenience4.push(dataobj.CONVENIENCE_NONFOOD_SUBTOTAL);
          y_convenience5.push(dataobj.CONVENIENCE_FOOD_BEVERAGE_PROCESSED);
          y_convenience6.push(dataobj.CONVENIENCE_FOOD_INSTANT_FRESH);
          y_convenience7.push(dataobj.CONVENIENCE_FOOD_SUBTOTAL);
          y_convenience8.push(dataobj.CONVENIENCE_TOTAL);
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

  const [options1, setoptions1] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Market data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"데이터 통계"
    },
    xaxis: {
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

  const [options2, setoptions2] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Department data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"데이터 통계"
    },
    xaxis: {
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

  const [options3, setoptions3] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "Convenience data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"데이터 통계"
    },
    xaxis: {
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

  const [options4, setoptions4] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "SSM data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"데이터 통계"
    },
    xaxis: {
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
  const [series1, setseries1] = useState([
    {
    name: 'MARKET_NONFOOD_HOMEWARE_CULTURE',
    data: y_market1
    },
    {
      name: 'MARKET_NONFOOD_CLOTHING',
      data: y_market2
    },
    {
      name: 'MARKET_NONFOOD_DAILY',
      data: y_market3
    },
    {
      name: 'MARKET_NONFOOD_SPORT',
      data: y_market4
    },
    {
      name: 'MARKET_NONFOOD_CHANDLERY',
      data: y_market5
    },
    {
      name: 'MARKET_NONFOOD_SUBTOTAL',
      data: y_market6
    },
    {
      name: 'MARKET_FOOD',
      data: y_market7
    },
    {
      name: 'MARKET_TOTAL',
      data: y_market8
    },
  ])


  const [series2, setseries2] = useState([
    {
    name: 'DEPARTMENT_NONFOOD_CHANDLERY',
    data: y_depart1
    },
    {
      name: 'DEPARTMENT_NONFOOD_WOMENSUITS',
      data: y_depart2
    },
    {
      name: 'DEPARTMENT_NONFOOD_WOMENCASUAL',
      data: y_depart3
    },
    {
      name: 'DEPARTMENT_NONFOOD_MENCLOTHING',
      data: y_depart4
    },
    {
      name: 'DEPARTMENT_NONFOOD_KIDS_SPORT',
      data: y_depart5
    },
    {
      name: 'DEPARTMENT_NONFOOD_HOMEWARE',
      data: y_depart6
    },
    {
      name: 'DEPARTMENT_NONFOOD_LUXURY',
      data: y_depart7
    },
    {
      name: 'DEPARTMENT_NONFOOD_SUBTOTAL',
      data: y_depart8
    },
    {
      name: 'DEPARTMENT_FOOD',
      data: y_depart9
    },
    {
      name: 'DEPARTMENT_TOTAL',
      data: y_depart10
    },
  ])
  
  const [series3, setseries3] = useState([
    {
    name: 'CONVENIENCE_NONFOOD_DAILY',
    data: y_convenience1
    },
    {
      name: 'CONVENIENCE_NONFOOD_CHANDLERY',
      data: y_convenience2
    },
    {
      name: 'CONVENIENCE_NONFOOD_CIGARETTE_ETC',
      data: y_convenience3
    },
    {
      name: 'CONVENIENCE_NONFOOD_SUBTOTAL',
      data: y_convenience4
    },
    {
      name: 'CONVENIENCE_FOOD_BEVERAGE_PROCESSED',
      data: y_convenience5
    },
    {
      name: 'CONVENIENCE_FOOD_INSTANT_FRESH',
      data: y_convenience6
    },
    {
      name: 'CONVENIENCE_FOOD_SUBTOTAL',
      data: y_convenience7
    },
    {
      name: 'CONVENIENCE_TOTAL',
      data: y_convenience8
    },
  ])

  const [series4, setseries4] = useState([
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
      <Chart options={options1} series={series1} type="line" width={1000} height={600} />
      <Chart options={options2} series={series2} type="line" width={1000} height={600} />
      <Chart options={options3} series={series3} type="line" width={1000} height={600} />
      <Chart options={options4} series={series4} type="line" width={1000} height={600} />
    </div>
  );
};




export default AppConsume
