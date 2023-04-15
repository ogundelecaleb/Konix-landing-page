// -------Menu button ----------
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".mySwiper", {
  autoPlay: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
var subject1 = document.querySelector(".subject1");
var sub2 = document.querySelector(".sub2");
var sub3 = document.querySelector(".sub3");
var sub4 = document.querySelector(".sub4");
var sub5 = document.querySelector(".sub5");

btn1.addEventListener("click", function () {
  if (subject1.style.display == "block") {
    subject1.style.display = "none";
  } else {
    subject1.style.display = "block";
  }
  btn1.classList.toggle("fa-plus");
  btn1.classList.toggle("fa-xmark");
});
btn2.addEventListener("click", function () {
  if (sub2.style.display == "block") {
    sub2.style.display = "none";
  } else {
    sub2.style.display = "block";
  }
  btn2.classList.toggle("fa-plus");
  btn2.classList.toggle("fa-xmark");
});
btn3.addEventListener("click", function () {
  if (sub3.style.display == "block") {
    sub3.style.display = "none";
  } else {
    sub3.style.display = "block";
  }
  btn3.classList.toggle("fa-plus");
  btn3.classList.toggle("fa-xmark");
});
btn4.addEventListener("click", function () {
  if (sub4.style.display == "block") {
    sub4.style.display = "none";
  } else {
    sub4.style.display = "block";
  }
  btn4.classList.toggle("fa-plus");
  btn4.classList.toggle("fa-xmark");
});
btn5.addEventListener("click", function () {
  if (sub5.style.display == "block") {
    sub5.style.display = "none";
  } else {
    sub5.style.display = "block";
  }
  btn5.classList.toggle("fa-plus");
  btn5.classList.toggle("fa-xmark");
});

window.addEventListener("load", () => {
  subject1.style.display == "block";
  if (
    subject1.style.display == "none" &&
    sub2.style.display == "none" &&
    sub3.style.display == "none" &&
    sub4.style.display == "none" &&
    sub5.style.display == "none"
  ) {
    btn1.classList.add("fa-xmark");
    btn2.classList.add("fa-xmark");
    btn3.classList.add("fa-xmark");
    btn4.classList.add("fa-xmark");
    btn5.classList.add("fa-xmark");
  } else {
    btn1.classList.add("fa-plus");
    btn2.classList.add("fa-plus");
    btn3.classList.add("fa-plus");
    btn4.classList.add("fa-plus");
    btn5.classList.add("fa-plus");
  }
});

// ------How it works section (on click change image)---------
// let iphone = document.querySelector("#phone");

// document.querySelector("#fund").onmouseover = () => {
//   iphone.innerHTML = "<img src=/images/iPhone-13.png />";
// };

// document.querySelector("#store").onmouseover = () => {
//   iphone.innerHTML = "<img src=/images/phone-slide1.png />";
//   iphone.classList.toggle("active");
// };

// document.querySelector("#cart").onmouseover = () => {
//   iphone.innerHTML = "<img src=/images/phone-slider2.png />";
// };

// document.querySelector("#phone").onchange = () => {
//   iphone.innerHTML = "<img src=/images/iPhone-13.png />";
// };

// ------section float------
function reveal() {
  var reveal = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
