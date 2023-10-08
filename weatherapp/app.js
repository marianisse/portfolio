/* ------ Pulling From The Weather API ---------- */
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

  /* ------ Displaying The Weather API on HTML ---------- */
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

/* ------ Button Event Listener ---------- */
document.querySelector("button").addEventListener("click", function () {
  weather.search();
});

/* ------ Search Button Functionality ---------- */
document
  .querySelector(".search-input")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

/* ------ Default Weather Display ---------- */
weather.displayWeather;
weather.fetchWeather("Minneapolis");

let date = new Date();

/* -------- Current Day, Month, Date ------- */
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
let dayOf = weekdayArr[date.getDay()];
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
let month = monthArr[date.getMonth()];
let dayNum = date.getDate();

/* ------ Displaying Date on HTML ---------- */
let currentDate = dayOf + ", " + month + " " + dayNum;
dateDisplay.innerHTML = currentDate;

/* ---------- Current Time and Display ------------- */
const timeDisplay = document.querySelector(".time");
let time = date.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: "true",
});
timeDisplay.innerHTML = time;
