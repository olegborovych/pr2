// !  --- we set constants and variables ---
const burger = document.querySelector(".burger");
const close = document.querySelectorAll(".close");
const menu = document.querySelector(".pop-Up-menu__wrapper");
const menu_con = document.querySelector(".pop-Up-menu__conteiner");
const hire_btn = document.querySelectorAll(".hire-me-btn");
const hire = document.querySelector(".hire-me");
const hire_con = document.querySelector(".hire-me__box");
const cookies_btn = document.querySelector(".cookies__btn");
const cookies = document.querySelector(".cookies");
const burger_l = document.querySelector(".burger__line");
const burger_con = document.querySelector(".burger__conteiner");
const pop_link = document.querySelectorAll(".pop-Up-menu__link");
var bg = document.querySelector(".burger__conteiner").offsetHeight;
var head_h = document.querySelector(".header").offsetHeight;
var scroll_change = head_h - 91;
const name = document.getElementById("name");
const email = document.getElementById("mail");
const text = document.getElementById("textarea");

// ! --- click->.burger open menu ---
burger.addEventListener("click", () => {
  menu.classList.add("pop-Up-menu__wrapper--visible");
  menu_con.classList.add("pop-Up-menu__conteiner--visible");
});

// ! --- click->.hidden cookies ---
cookies_btn.addEventListener("click", () => {
  cookies.classList.add("cookies--hiden");
});

// ! --- click->.open hire-me form ---
hire_btn.forEach(function (item, i, arr) {
  item.addEventListener("click", () => {
    hire.classList.add("hire-me--visible");
    hire_con.classList.add("hire-me__box--visible");
  });
});

// ! --- click->.close menu and hire-me form to close icon ---
close.forEach(function (item, i, arr) {
  item.addEventListener("click", () => {
    menu.classList.remove("pop-Up-menu__wrapper--visible");
    menu_con.classList.remove("pop-Up-menu__conteiner--visible");
    hire.classList.remove("hire-me--visible");
    hire_con.classList.remove("hire-me__box--visible");
  });
});

// ! --- click->.link menu close to menu ---
pop_link.forEach(function (item, i, arr) {
  item.addEventListener("click", () => {
    menu.classList.remove("pop-Up-menu__wrapper--visible");
    menu_con.classList.remove("pop-Up-menu__conteiner--visible");
  });
});

// ! --- click->.send close and subscribeonly valid date ---
function send() {
  if (name.validity.valid && email.validity.valid && text.validity.valid) {
    hire.classList.remove("hire-me--visible");
    hire_con.classList.remove("hire-me__box--visible");
  } else {
  }
}

// ! --- click->.drow scroll to down ---
$(document).ready(function () {
  var screen = $(".header").height() - bg;
  $(document).on("click", ".down-arrow__conteiner", function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: screen }, 1500);
  });
});

// ! --- click->.menu scroll to target section ---
$(document).ready(function () {
  $(document).on("click", ".pop-Up-menu__link", function (event) {
    event.preventDefault();

    var id = $(this).attr("href");
    var xy = $(id).offset().top - bg;
    $("body,html").animate({ scrollTop: xy }, 1500);
  });
});

// ! --- click->.menu scroll to target section ---
window.onscroll = function () {
  myFunction();
};

// ! --- scroll-> change burger color and visible burger_conteiner ---
function myFunction() {
  if (
    document.body.scrollTop > scroll_change ||
    document.documentElement.scrollTop > scroll_change
  ) {
    burger_l.classList.add("burger__line--blue");
    burger.classList.add("burger--translate");
    burger_con.classList.add("burger__conteiner--translate");
  } else {
    burger_l.classList.remove("burger__line--blue");
    burger.classList.remove("burger--translate");
    burger_con.classList.remove("burger__conteiner--translate");
  }
}
