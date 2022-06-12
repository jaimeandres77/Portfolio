/*================= MENU SHOW HIDDEN =================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/*Validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/*Validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*================= REMOVE MENU MOBILE =================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //When we click each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*================= ACCORDION SKILLS =================*/

const skillsHeader = document.getElementsByClassName("skills__header");
const skillsArrow = document.querySelectorAll(".skills__arrow");

for (let i = 0; i < skillsHeader.length; i++) {
  skillsHeader[i].addEventListener("click", function () {
    let skillList = this.nextElementSibling;
    skillList.classList.toggle("skills__open");
    if (skillList.style.maxHeight) {
      skillList.style.maxHeight = null;
      skillsArrow[i].setAttribute("style", "transform: rotate(0deg);");
    } else {
      skillList.style.maxHeight = skillList.scrollHeight + "px";
      skillsArrow[i].setAttribute("style", "transform: rotate(-180deg);");
    }
  });
}

/*================= PORTFOLIO SWIPER =================*/

let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
