import {useState, useEffect} from 'react'
import axios from 'axios'
import {Bar, Doughnut, Line} from 'react-chartjs-2'

const Consum = () => {


  const [confirmedData, setconfirmedData] = useState({
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
  const [quarantinedData, setquarantinedData] = useState({
    labels: ['1'],
    datasets: [
      {
        label: "월별 격리자",
        borderColor: "red",
        fill: false,
        data: 1
      },
    ]
  })

  const [deathData, setdeathData] = useState({
    labels: ['1'],
    datasets: [
      {
        label: "월별 사망자",
        borderColor: "red",
        fill: false,
        data: 1
      },
    ]
  })


  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("https://api.covid19api.com/total/dayone/country/jp")
      makeData(res.data)
    }
    const makeData = (items) => {
      // items.forEach(item=> console.log(item))
      const arr = items.reduce((acc, cur)=>{
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;

        const findItem = acc.find(a=> a.year === year && a.month === month);
        // 아이템이 없는것을 먼저 확인해서 초기값을 넣어준다
        if(!findItem){
          acc.push({year, month, date, confirmed, active, death, recovered})
        }
        // 아이템이 있으면 월의 마지막 날짜까지 누적한다.
        if(findItem && findItem.date < date){
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
      },[])
      const arr1 = items.reduce((acc, cur)=>{
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const dayconfirmed = cur.Confirmed;
        

        const findItem = acc.find(a=> a.year === year && a.month === month);
        // 아이템이 없는것을 먼저 확인해서 초기값을 넣어준다
        if(!findItem){
          acc.push({year, month, date, dayconfirmed})
        }
        // 아이템이 있으면 월의 마지막 날짜까지 누적한다.
        if(findItem && findItem.date < date){
          findItem.date = date;
          findItem.year = year;
          findItem.month = month;
          findItem.dayconfirmed = dayconfirmed;
          
        }
        
        
        // console.log(cur,year,month,date)
        return acc;
      },[])
      // console.log(arr1)
      // console.log(arr)
      const labels = arr.map(a => `${a.month + 1}월`);
      // console.log(labels)
      // console.log(arr.map(a=> a.confirmed))
      setconfirmedData({
        labels,
        datasets: [
          {
            label: "국내 누적 확진자",
            backgroundColor: "red",
            fill: true,
            data: arr.map(a => a.confirmed)
          },
        ]
      });
      setquarantinedData({
        labels,
        datasets: [
          {
            label: "월별 격리자",
            borderColor: "red",
            fill: false,
            data: arr.map(a => a.active)
          },
        ]
      });
      // console.log(arr.map(a=> a.death))
      // console.log(arr)
      setdeathData({
        labels,
        datasets: [
          {
            label: "월별 사망자",
            borderColor: "red",
            fill: false,
            data: arr.map(a => a.death)
          },
        ]
      });

    }
    fetchEvents()

  },[])



  return (
    <div>
      <section>
        <h2 style={{textAlign: 'center'}}>일본 코로나 현황</h2>
        <div className="contents">
          <div>
            <Bar data={confirmedData} options={
              {title: {display: true, text: "누적 확진자 추이", fontsize: 16}},
              {legend: {dispaly: true, position: "bottom"}}
            } />
          </div>
          <div>
            <Line data={quarantinedData} options={
              {title: {display: true, text: "월별 격리자 현황", fontsize: 16}},
              {legend: {dispaly: true, position: "bottom"}}
            } />
          </div>
          <div>
            <Line data={deathData} options={
              {title: {display: true, text: "월별 사망자 현황", fontsize: 16}},
              {legend: {dispaly: true, position: "bottom"}}
            } />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Consum
