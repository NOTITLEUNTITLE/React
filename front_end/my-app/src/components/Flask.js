import React, { useState, useEffect } from 'react';

const Flask = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/members')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const flasklist = data.map((item, index) => console.log(item.MembersCount));

  return (
    <div className="flask">
      {data.map((item, index) => (
        <p>{item.사람숫자}</p>
      ))}
      ;
    </div>
  );
};

export default Flask;
