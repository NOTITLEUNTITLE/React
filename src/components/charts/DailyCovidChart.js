import React, {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import Chart from 'react-apexcharts';




function DailyCovidChart() {
  let x = [''];
  let Deaths = [];
  let y_confirmed = [];
  let y = [];
  let year = "";
  let month = "";
  let day = "";
  const chart = () => {
    axios
      .get("https://api.covid19api.com/total/dayone/country/kr")
      // .get("https://corona.lmao.ninja/v2/countries")
      .then(res => {
        if(res.status === 200){
          console.log("코로나 데이터 가져왔다.")
          console.log(res.data)
          for(const dataobj of res.data){
            year = ((dataobj.Date.substring(0,4)));
            month = ((dataobj.Date.substring(5,7)));
            day = ((dataobj.Date.substring(8,10)));
            x.push((year+month+day));
            Deaths.push(dataobj.Deaths);
            y_confirmed.push(dataobj.Confirmed);
          }
          for(var i=1; i < x.length; i++){
            // console.log("포문 진입")
            y.push(y_confirmed[i]-y_confirmed[i-1]);
          }
        }else{
          console.log("코로나 데이터 못 가져왔다.")
        }
      })
      .catch(err => {
        console.log(err)
      });
    console.log("x,y",x,y)
    
    
  }

  useEffect(() => {
    chart();  
    
  }, [])


  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart'
    },
    title:{
      text: "코로나 일일 확진자",
      style:{
        fontSize:30
      }
    },
    // subtitle:{
    //   text:"코로나 일일 확진자"
    // },
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
  const [series, setseries] = useState([{
    name: '코로나 확진자',
    data: y,
    color: "#0c2925",
    // type: 'column',
  }])
  const [series1, setseries1] = useState([{
    name: '코로나 사망자',
    data: Deaths,
    color: "#0c2925",
    // type: 'column',
  }])

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "left",
      }}
    >
      <br />
      <h2>COVID-19 Korea Graphs</h2>
      <br />
      <Chart options={options} series={series} type="line" width={'100%'} height={600} />
      {/* <Chart options={options} series={series1} type="line" width={1000} height={600} /> */}
    </div>
    
    
    
  );
}

export default DailyCovidChart;
