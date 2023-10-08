let slideIndex = 1;
showDivs(slideIndex);

//displays first image when clicked
function plusDivs(n) {
  showDivs((slideIndex += n));
}

// functionality of the buttons
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  // disappears at the end of the slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // slides are showcased dependent on the length
  x[slideIndex - 1].style.display = "block";
}
