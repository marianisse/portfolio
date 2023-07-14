let weather = {
  apiKey: "6158d444e5a774eb4130c89f37fba32f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey +
        "&units=imperial"
    )
      .then((response) => {
        if (!response.ok) {
          alert("Error: No weather found.");
          throw new Error("Error: No weather found");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerHTML = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind: " + speed + "mph";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-input").value);
  },
};

document.querySelector("button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-input")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.displayWeather;
weather.fetchWeather("Minneapolis");

// if (weather.displayWeather(data) >= 80) {
//   console.log("hot");
// } else {
//   console.log("error");
// }
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

/* ---------- Current Time and Display ------------- */
const timeDisplay = document.querySelector(".time");
const hourArr = [
  12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12,
];
let hour = day.getHours();
let minute = day.getMinutes();
let getAmPm = hourArr <= 12 ? "AM" : "PM";
let getTime = hour + ":" + minute + " " + getAmPm;
timeDisplay.innerHTML = getTime;
