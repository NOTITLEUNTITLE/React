import styles from "./chart.css";
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const Metro = () => {
  
  const [chartdata, setchartdata] = useState({
    labels: ['1'],
    datasets: [
      {
        label: "국내 누적 확진자",
        backgroundColor: "red",
        fill: true,
        data: 1
      },
    ]
  })

  const chart = () => {

    let y = [];
    let x = [];
    axios
      .get("http://15.164.225.133:5000/metrodata")
      .then(res => {
        // console.log(res)
        for(const dataobj of res.data){
          y.push(parseInt(dataobj.ALIGHT));
          x.push(parseInt(dataobj.DATE));
        }
        setchartdata({
          labels: x,
          datasets: [
            {
              label: "지하철 이용객",
              borderColor: "red",
              fill: false,
              data: y,
            },
          ]  
        });
      })
      .catch(err => {
        console.log(err)
      });
    console.log(x,y)
    

  }

  
  useEffect(() => {
    chart();
  }, []);




  return (
    <main>
      <div className={styles.main__container}>
          <h2 style={{textAlign: 'center'}}>지하철 이용객 현황</h2>
          <div className={styles.contents}>
            <div>
              <Line data={chartdata} options={
                {title: {display: true, text: "누적 확진자 추이", fontsize: 16}},
                {legend: {dispaly: true, position: "bottom"}}
              } />
            </div>
          </div>
      </div>
    </main>
  )
}

export default Metro

