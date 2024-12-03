let slideIndex = 1;

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " active";
}

function generateDots() {
  let slides = document.getElementsByClassName("mySlides");
  let dotsContainer = document.getElementById("dots-container");

  dotsContainer.innerHTML = "";

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot drop-shadow-2xl";
    dot.onclick = function () {
      currentSlide(i + 1);
    };
    dotsContainer.appendChild(dot);
  }
}

const renderData = () => {
  generateDots();
  showSlides(slideIndex);
};

renderData();
