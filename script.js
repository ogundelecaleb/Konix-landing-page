// -------Menu button ----------
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// -------Hero section image slider ----------
var swiper = new Swiper(".review-slider", {
  loop: true,
  enlargeCenterPage: true,
  spaceBetween: 20,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
var subject1 = document.querySelector(".subject1");
var sub2 = document.querySelector(".sub2");
var sub3 = document.querySelector(".sub3");


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

window.addEventListener("load", () => {
  if ((subject1.style.display == "none" &&sub2.style.display == "none"&&sub3.style.display == "none")) {
    btn1.classList.add("fa-xmark");
    btn2.classList.add("fa-xmark");
    btn3.classList.add("fa-xmark");
  } else {
    btn1.classList.add("fa-plus");
    btn2.classList.add("fa-plus");
    btn3.classList.add("fa-plus");
  }
});

// const ayNight = document.querySelector(".headingss");
// const yNight = document.querySelector(".headingsss");
// const ubject = document.querySelector(".ubject");
// const bject = document.querySelector(".bject");
// const subject = document.querySelector('.subject')

// dayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-plus");
//   dayNight.querySelector("i").classList.toggle("fa-xmark");
//   subject.classList.toggle("show");

// });
// ayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-plus");
//   dayNight.querySelector("i").classList.toggle("fa-xmark");
//   ubject.classList.toggle("show");

// });

// yNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-plus");
//   dayNight.querySelector("i").classList.toggle("fa-xmark");
//   bject.classList.toggle("show");

// });

// window.addEventListener("load", () => {
//   if (subject.classList.contains("show")&& ubject.classList.contains("show")&& bject.classList.contains("show")) {
//     dayNight.querySelector("i").classList.add("fa-xmark");
//     ayNight.querySelector("i").classList.add("fa-xmark");
//     yNight.querySelector("i").classList.add("fa-xmark");
//   } else {
//     dayNight.querySelector("i").classList.add("fa-plus");
//     ayNight.querySelector("i").classList.add("fa-plus");
//     yNight.querySelector("i").classList.add("fa-plus");

//   }
// });

// const dayNight = document.querySelectorAll(".headings");
// const dayNight = document.querySelectorAll(".headings");
// const ubject = document.querySelector(".ubject");
// const bject = document.querySelector(".bject");

// function setNote(){
//   subject.forEach((note) => {
//     note = eachNote
//     return (
//       eachNote
//     )
// })
// }
// const newNote = setNote()
// dayNight.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.querySelector("i").classList.toggle("fa-plus");
//     element.querySelector("i").classList.toggle("fa-xmark");
//     subject.classList.toggle("show");
//     ubject.classList.remove("show");
//     bject.classList.toggle("show");
//   });
// });
// if (subject.classList.contains("show")){
//   ubject.classList.remove("show");
//   bject.classList.remove("show")
// }

// function setActiveStyle() {
//   dayNight.forEach((element) => {
//     if (subject.classList.contains("show")&& ubject.classList.contains("show")&& bject.classList.contains("show")) {
//       element.querySelector("i").classList.add("fa-xmark");
//     } else {
//       element.querySelector("i").classList.add("fa-plus");
//     }
//   });
// }
// window.addEventListener("load", setActiveStyle)

// window.addEventListener("load", () => {
//   if (subject.classList.contains("show")) {
//     dayNight.querySelector("i").classList.add("fa-xmark");
//   } else {
//     dayNight.querySelector("i").classList.add("fa-plus");
//   }
// });

// window.addEventListener("load", (element) => {
//   if (subject.classList.contains("show")) {
//     dayNight.forEach((element) => {
//       element.querySelector("i").classList.add("fa-xmark")
//     } else {
//     element.querySelector("i").classList.add("fa-plus");
//       });

// });

// const dayNight = document.querySelectorAll(".headings");
// const subject = document.querySelector('.subject')

// dayNight.addEventListener("click", () => {
//   dayNight.querySelector("i").classList.toggle("fa-plus");
//   dayNight.querySelector("i").classList.toggle("fa-xmark");
//   subject.classList.toggle("show");

// });

// ------How it works section (on click change image)---------
let iphone = document.querySelector("#phone");

document.querySelector("#fund").onmouseover = () => {
  iphone.innerHTML = "<img src=/images/iPhone-13.png />";
};

document.querySelector("#store").onmouseover = () => {
  iphone.innerHTML = "<img src=/images/phone-slide1.png />";
  iphone.classList.toggle("active");
};

document.querySelector("#cart").onmouseover = () => {
  iphone.innerHTML = "<img src=/images/phone-slider2.png />";
};

document.querySelector("#phone").onchange = () => {
  iphone.innerHTML = "<img src=/images/iPhone-13.png />";
};

// ------section float------
function reveal() {
  var reveal = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
