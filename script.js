const X = document.querySelector(".closePop-up");
const banner = document.querySelector(".pop-upBanner");
const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".closeHamburger");
const navitem = document.querySelectorAll(".nav-item");
const navitems = document.querySelector(".nav-items");

X.addEventListener("click", function () {
  banner.classList.add("fade-out");
});

banner.addEventListener("transitionend", function () {
  banner.style.display = "none";
});

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  closeHamburger.style.display = "block";
  navitem.forEach((item) => {
    item.style.display = "block";
  });

  navitems.style.backgroundColor = "grey";
  navitems.style.height = "100vh";
});

closeHamburger.addEventListener("click", function () {
  closeHamburger.style.display = "none";
  hamburger.style.display = "block";
  navitem.forEach((item) => {
    item.style.display = "none";
  });
  navitems.style.backgroundColor = "white";
  navitems.style.height = "0";
});
