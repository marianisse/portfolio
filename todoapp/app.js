console.log("hi");

let day = new Date();

/* -------- Current Day and Display ------- */
const dateDisplay = document.querySelector(".date");
let weekdayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOf = weekdayArr[day.getDay()];
let monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = monthArr[day.getMonth()];
let dayNum = day.getDate();

let currentDate = dayOf + ", " + month + " " + dayNum;
dateDisplay.innerHTML = currentDate;
