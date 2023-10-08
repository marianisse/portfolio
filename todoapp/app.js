// -------- Assigning variables to elements ------------------------ //
const form = document.querySelector("#form");
const searchBar = document.querySelector(".search-bar");
const submit = document.querySelector(".submit-btn");
const items = document.querySelector(".items");
const deleteBtn = document.querySelector(".delete-btn");

// --------- Current Date ---------------------------------------------- //
let day = new Date();

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

// --------- Display Current Date -------------------------------------- //
let currentDate = dayOf + ", " + month + " " + dayNum;
dateDisplay.innerHTML = currentDate;

// --------------- Initialize List --------------------------------------- //
let list;
if (localStorage.list && localStorage.list != "") {
  list = JSON.parse(localStorage.list);
} else {
  list = [];
}
// ------------------- List Items Creation ----------------------------
const makeListItem = (text, parent) => {
  let listItem = document.createElement("li");
  listItem.textContent = text;
  listItem.className = "list-group-item";
  parent.appendChild(listItem);

  // ---------------- Click Item to strike -----------------------
  listItem.addEventListener("click", (e) => {
    console.log("clicked");
    listItem.style = "text-decoration: line-through";
    localStorage.setItem("itemClick", "clicked");
  });

  //    --------------- Double Click to un-strike ---------------------
  listItem.addEventListener("dblclick", (e) => {
    console.log("double clicked");
    listItem.style = "text-decoration: none";
    localStorage.setItem("itemClick", "dblclicked");
  });

  //    ------------ Storing it on load --------------------------------
  window.addEventListener("load", (e) => {
    console.log("loaded");
    let returnClick = localStorage.getItem("itemClick");
    if (returnClick === "clicked") {
      console.log("clicked is stored");
      listItem.style = "text-decoration: line-through";
    } else if (returnClick === "dblclicked") {
      console.log("double click is stored");
      listItem.style = "text-decoration: none";
    } else {
      console.log("nothing stored");
    }
  });
};

// --------- Looping through list items ------------------------------- //

list.forEach((element) => {
  makeListItem(element, items);
});

const isDuplicateValue = (arr, text) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == text) {
      return true;
    }
  }
  return false;
};
// ----------- Submit button functionality ------------------------------------------ //
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchBar.value == "" || isDuplicateValue(list, searchBar.value)) {
    return;
  } else {
    list.push(searchBar.value);
    makeListItem(searchBar.value, items);
    localStorage.list = JSON.stringify(list);
    searchBar.value = "";
  }
});

// --------------- Clear Local Storage ------------------------------- //
deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  list = [];
  searchBar.value = "";
  let arr = document.querySelectorAll("li");
  for (let i = 0; i < arr.length; i++) {
    arr[i].remove();
  }
});
