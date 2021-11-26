import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------
export default function CovidData() {
  // useEffect(() => {
  //   axios.get('/members').then((res) => console.log(res));
  // });

  const [confirmedData, setconfirmedData] = useState({
    labels: ['1'],
    datasets: [
      {
        name: '국내 누적 확진자',
        type: 'area',
        data: 1
      }
    ]
  });

  const [quarantinedData, setquarantinedData] = useState({
    labels: ['1'],
    datasets: [
      {
        name: '월별 격리자',
        type: 'area',
        data: 1
      }
    ]
  });

  const [deathData, setdeathData] = useState({
    labels: ['1'],
    datasets: [
      {
        name: '월별 사망자',
        type: 'area',
        data: 1
      }
    ]
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('https://api.covid19api.com/total/dayone/country/kr');
      makeData(res.data);
    };
    const makeData = (items) => {
      // items.forEach(item=> console.log(item))
      const arr = items.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;

        const findItem = acc.find((a) => a.year === year && a.month === month);
        // 아이템이 없는것을 먼저 확인해서 초기값을 넣어준다
        if (!findItem) {
          acc.push({ year, month, date, confirmed, active, death, recovered });
        }
        // 아이템이 있으면 월의 마지막 날짜까지 누적한다.
        if (findItem && findItem.date < date) {
          findItem.active = active;
          findItem.death = death;
          findItem.date = date;
          findItem.year = year;
          findItem.month = month;
          findItem.confirmed = confirmed;
          findItem.recovered = recovered;
        }
        // console.log(cur,year,month,date)
        return acc;
      }, []);

      const labels = arr.map((a) => `${a.month + 1}월`);

      setconfirmedData({
        labels,
        datasets: [
          {
            name: '국내 누적 확진자',
            type: 'area',
            data: arr.map((a) => a.confirmed)
          }
        ]
      });
      setquarantinedData({
        labels,
        datasets: [
          {
            name: '월별 격리자',
            type: 'area',
            data: arr.map((a) => a.active)
          }
        ]
      });
      // console.log(arr.map(a=> a.death))
      // console.log(arr)
      setdeathData({
        labels,
        datasets: [
          {
            name: '월별 사망자',
            type: 'area',
            data: arr.map((a) => a.death)
          }
        ]
      });
    };
    fetchEvents();
  }, []);

  const CHART_DATA = [confirmedData.datasets, quarantinedData.datasets, deathData.datasets];

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: 'gradient' },
    labels: confirmedData.labels,
    xaxis: { type: 'String' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });
  console.log(CHART_DATA[0][0]);
  console.log(confirmedData.datasets[0]);
  console.log(confirmedData.labels);

  return (
    <Card>
      <CardHeader title="국내 코로나 19 확진자" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
