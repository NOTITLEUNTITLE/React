import React, {useState,useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const ConcertChart = () => {
  // let y1 = [];
  // let y2 = [];
  // let y3 = [];
  // let y4 = [];
  // let y5 = [];
  // let x = [""];

  // const chart = () => {
  //   axios
  //     .get("http://15.164.225.133:5000/concert")
  //     .then(res => {
  //       if(res.status === 200){
  //         console.log("콘서트 데이터 가져았다.")
  //         for(const dataobj of res.data){
  //           y1.push((dataobj.perform_num));
  //           y2.push((dataobj.opening_num));
  //           y3.push((dataobj.showing_num));
  //           y4.push((dataobj.sales));
  //           y5.push((dataobj.book_num));
  //           // x.push((dataobj.date_mon));
  //           // console.log(dataobj)
  //         }

  //       }else {
  //         console.log("콘서트 데이터 못 가져왔다.")
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  //   console.log("y",y1,y2,y3,y4,y5)
    
  // }

  
  useEffect(() => {
    setseries([
      {
        name: 'perform_num',
        data: [
          1147,
          1242,
          1274,
          1506,
          1575,
          1561,
          689,
          540,
          177,
          178,
          347,
          456,
          573,
          681,
          290,
          785,
          1165,
          703,
          321,
          420,
          713,
          877,
          1062,
          1052,
        ]
      },
      {
        name: 'opening_num',
        data: [
        928,
        956,
        988,
        1274,
        1310,
        1273,
        474,
        346,
        64,
        90,
        229,
        312,
        431,
        496,
        178,
        650,
        980,
        550,
        212,
        323,
        611,
        756,
        893,
        916,
      ]
    },
    {
      name: 'showing_num',
      data: [
        8718,
        10527,
        7570,
        9186,
        9133,
        11666,
        7628,
        5116,
        2167,
        2185,
        3872,
        3584,
        4526,
        4917,
        2623,
        4229,
        5225,
        4438,
        2586,
        2752,
        3655,
        4278,
        5319,
        4810,
      ]
    },
    {
      name: 'sales',
      data: [
        16432380,
        26900492,
        23309533,
        29950618,
        34615357,
        54699925,
        39021745,
        21217712,
        9140850,
        4693950,
        11509519,
        10538425,
        17162463,
        17071731,
        7020444,
        12740488,
        15671208,
        5060030,
        3740135,
        16936407,
        21449027,
        23223366,
        26586822,
        25659749,
      ]
    },
    {
      name: 'book_num',
      data: [
        674526,
        1077234,
        826272,
        1046464,
        1092626,
        1561341,
        956693,
        512174,
        162322,
        116851,
        251368,
        240359,
        393020,
        412484,
        128772,
        325131,
        487734,
        134630,
        110597,
        317998,
        421918,
        491158,
        620043,
        601483,
      ]
    },
    ])
  }, []);

  const [options, setoptions] = useState({
    chart: {
      id: 'apex chart',
      // zoom: {
      //   autoScaleYaxis: true
      // }
    },
    annotations: {
      xaxis: [{
        x: "2001",
        x2: "2106",
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
      // {},
      tickAmount: 10,
      labels: {
        show: true,
        rotate: 0,
        // formatter: (val) => formatDateTo(val), 
      },
      // labels: [1,2,3,4],
      type: "category",
      categories: [
        "1907",
        "1908",
        "1909",
        "1910",
        "1911",
        "1912",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2101",
        "2102",
        "2103",
        "2104",
        "2105",
        "2106",
      ],
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
      name: 'perform_num',
      data: [1]
    },
    {
      name: 'opening_num',
      data: [1]
    },
    {
      name: 'showing_num',
      data: [1]
    },
    {
      name: 'sales',
      data: [1]
    },
    {
      name: 'book_num',
      data: [1]
    },
  ])


  return (
    <div>
      <Chart options={options} series={series} type="line" width={'100%'} height={600} />
    </div>
  );
};




export default ConcertChart;
