import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const MetroChart = () => {
  let y = [];
  let x = [];
  let year = [];
  let month = [];
  let day = [];
  let temp = [];
  let acc = 0;
  let temp1 = [''];

  const chart = () => {
    axios
      .get("http://15.164.225.133:5000/metro")
      .then(res => {
        if(res.status === 200){
          console.log("지하철 데이터 가져왔다.")
          for(const dataobj of res.data){
            y.push((dataobj.get_on));
            x.push(String(dataobj.date_day));
            year.push(dataobj.date_day.substring(0,2))
            month.push(dataobj.date_day.substring(2,4))
            day.push(dataobj.date_day.substring(4,6))
          }
          for(var i=1; i<year.length; i++){
            if(month[i] === month[i-1]){
              acc = acc + Number(y[i])
            }
            else{
              temp1.push(String(year[i])+String(month[i-1]));
              temp.push(acc);
              acc = 0;
            }
          }
          console.log("month data", temp);
          console.log("month",temp1)
        }else{
          console.log("지하철 데이터 못 가져왔다.")
        }
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y);
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
        rotate: 90,
        label: {
          show: true,
          text: '국내 첫 확진자',
          style: {
            color: "#fff",
            background: '#775DD0',
            fontSize: "16"
          }
        }
      }],
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
      text: "Metro data",
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:"서울시 지하철 데이터 통계",
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
      // tooltip: {
      //   enabled: true
      // },
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
    name: '일일 지하철 탑승객',
    data: temp,
    color: "#0c2925",
  }])

  return (
    <div>
      <Chart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
    
  );
};

export default MetroChart;
