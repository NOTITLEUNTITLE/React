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
  let year = [];
  let month = [];
  let day = [];
  let temp = [''];
  let temp1 = [];
  let temp2 = [];
  let temp3 = [];
  let temp4 = [];
  let temp5 = [];
  let temp6 = [];
  let temp7 = [];
  let temp8 = [];
  let temp9 = [];
  let temp10 = [];
  let temp11 = [];
  let temp12 = [];
  let acc1 = 0;
  let acc2 = 0;
  let acc3 = 0;
  let acc4 = 0;
  let acc5 = 0;
  let acc6 = 0;
  let acc7 = 0;
  let acc8 = 0;
  let acc9 = 0;
  let acc10 = 0;
  let acc11 = 0;
  let acc12 = 0;
  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/naver_data")
      .then(res => {
        if(res.status === 200){
          console.log("생활 데이터 가져왔다.")
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
              acc6 = acc6 + Number(y5[i])
              acc7 = acc7 + Number(y5[i])
              acc8 = acc8 + Number(y5[i])
              acc9 = acc9 + Number(y5[i])
              acc10 = acc10 + Number(y5[i])
              acc11 = acc11 + Number(y5[i])
              acc12 = acc12 + Number(y5[i])
            }
            else{
              temp.push(String(year[i])+String(month[i-1]));
              temp1.push(Math.round(acc1 * 100) / 100);
              temp2.push(Math.round(acc2 * 100) / 100);
              temp3.push(Math.round(acc3 * 100) / 100);
              temp4.push(Math.round(acc4 * 100) / 100);
              temp5.push(Math.round(acc5 * 100) / 100);
              temp6.push(Math.round(acc6 * 100) / 100);
              temp7.push(Math.round(acc7 * 100) / 100);
              temp8.push(Math.round(acc8 * 100) / 100);
              temp9.push(Math.round(acc9 * 100) / 100);
              temp10.push(Math.round(acc10 * 100) / 100);
              temp11.push(Math.round(acc11 * 100) / 100);
              temp12.push(Math.round(acc12 * 100) / 100);
              // temp2.push(acc2);
              // temp3.push(acc3);
              // temp4.push(acc4);
              // temp5.push(acc5);
              // temp6.push(acc5);
              // temp7.push(acc5);
              // temp8.push(acc5);
              // temp9.push(acc5);
              // temp10.push(acc5);
              // temp11.push(acc5);
              // temp12.push(acc5);
              acc1 = 0;
              acc2 = 0;
              acc3 = 0;
              acc4 = 0;
              acc5 = 0;
              acc6 = 0;
              acc7 = 0;
              acc8 = 0;
              acc9 = 0;
              acc10 = 0;
              acc11 = 0;
              acc12 = 0;
            }
          }
          console.log("month data", temp);
          console.log("month",temp1)
        }else{
          console.log("생활 데이터 못 가져왔다.")
        }
      })
      .catch(err => {
        console.log(err)
      });
    // console.log(x,y);
    console.log(year,month,day);
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
      categories: temp,
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
      name: 'amenity',
      data: temp1
    },
    {
      name: 'beauty',
      data: temp2
    },
    {
      name: 'book',
      data: temp3
    },
    {
      name: 'childbirth',
      data: temp4
    },
    {
      name: 'duty_free',
      data: temp5,
    },
    {
      name: 'fashion_accessories',
      data: temp6
    },
    {
      name: 'fashion_clothes',
      data: temp7
    },
    {
      name: 'food',
      data: temp8
    },
    {
      name: 'furniture',
      data: temp9
    },
    {
      name: 'home_appliance',
      data: temp10
    },
    {
      name: 'living_health',
      data: temp11
    },
    {
      name: 'sport_leisure',
      data: temp12
    },
  ])

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
  );
};

export default SearchChart;
