import React, {useState, useEffect} from 'react'
import axios from 'axios'



// const Flask = () => {
//   const [data, setData] = useState([{}])
//   useEffect(() => {
//     const fetchEvents = async () => {
//       const res = await axios.get("http://localhost:5000/members")
//       makeData(res.data)
//     }
//     const makeData = (items) => {
//       items.forEach(item=> console.log(item))
//       const arr = items.reduce((acc, cur)=>{
//         const currentDate = new Date(cur.Date);
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();
//         const date = currentDate.getDate();
//         const members = cur.MembersCount;
//         const active = cur.Active;
        
//         // const findItem = acc.find(a=> a.year === year && a.month === month);
//         // // 아이템이 없는것을 먼저 확인해서 초기값을 넣어준다
//         // if(!findItem){
//         //   acc.push({year, month, date, members, active})
//         // }
//         // // 아이템이 있으면 월의 마지막 날짜까지 누적한다.
//         // if(findItem && findItem.date < date){
//         //   findItem.active = active;
//         //   findItem.date = date;
//         //   findItem.year = year;
//         //   findItem.month = month;
//         //   findItem.members = members;
//         // }
        
        
//         console.log(cur,year,month,date)
//         return acc;
//       },[])
//       console.log(arr)

//     }
//     fetchEvents()

//   },[])

//   return (
//     <div>

//     </div>
//   )
// }




const Flask = () => {
  const [data, setData] = useState([{}])

  useEffect(()=> {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
        // data.forEach(
        //   item=> console.log(item)
        // )
      }
    )
  }, [])
  
  const flasklist = data.map((item, index) => (console.log(item.MembersCount)));

  return (
    <div className="flask">
      {
        data.map((item, index) => (<p>{item.사람숫자}</p>))
      }
    </div>
  )
}

export default Flask
