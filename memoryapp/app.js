//------------- card options array -----------------------
const cardArr = [
  {
    name: "bunny",
    img: "images/bunny.png",
  },

  {
    name: "chick",
    img: "images/chick.png",
  },

  {
    name: "cow",
    img: "images/cow.png",
  },

  {
    name: "llama",
    img: "images/llama.png",
  },

  {
    name: "pig",
    img: "images/pig.png",
  },

  {
    name: "sheep",
    img: "images/sheep.png",
  },

  {
    name: "bunny",
    img: "images/bunny.png",
  },

  {
    name: "chick",
    img: "images/chick.png",
  },

  {
    name: "cow",
    img: "images/cow.png",
  },

  {
    name: "llama",
    img: "images/llama.png",
  },

  {
    name: "pig",
    img: "images/pig.png",
  },

  {
    name: "sheep",
    img: "images/sheep.png",
  },
];

// ----------- randomly shuffling the cards array by comparing two values -------------
cardArr.sort(() => 0.5 - Math.random());

// ----------- HTML elements to JS ----------------
const grid = document.querySelector("#grid");
const result = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// ------------ create the board cards ----------------------
function createBoard() {
  for (let i = 0; i < cardArr.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/cover.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}
createBoard();

// --------- checking between two values if they're a match --------
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/cover.png");
    cards[optionTwoId].setAttribute("src", "images/cover.png");
    alert("you have clicked the same image.");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("you found a match!");
    cards[optionOneId].setAttribute("src", "images/dirt.png");
    cards[optionTwoId].setAttribute("src", "images/dirt.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/cover.png");
    cards[optionTwoId].setAttribute("src", "images/cover.png");
    alert("sorry, try again :(");
  }
  // --------- values are evenly matched, game ends ------------
  result.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenId = [];
  if (cardsWon.length === cardArr.length / 2) {
    result.textContent = " Congratulations, you won!";
  }
}

//--------------- flipping cards function ---------------------
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArr[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArr[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
