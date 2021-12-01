import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const DepartmentChart = () => {
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
  
  let x = [""];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/consumption ")
      .then(res => {
        console.log(res)
        for(const dataobj of res.data){
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
      id: 'apex chart'
    },
    title:{
      text: "Department-Store data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"백화점 데이터 통계",
      margin: 40
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

  const [series, setseries] = useState([
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

  return (
    <div>
      <Chart options={options} series={series} type="line" width={1000} height={600} />
    </div>
  );
};

export default DepartmentChart;
