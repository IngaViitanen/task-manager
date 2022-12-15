import React from 'react'

const Header = () => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date = new Date();

let day = date.getDate();
let today = weekday[date.getDay()]
let month = date.getMonth() + 1;
// let year = date.getFullYear();


  return (
    <>
        <h1>{today} {day}/{month}</h1>
    </>
  )
}

export default Header