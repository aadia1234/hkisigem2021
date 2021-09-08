const navbar = $("#navbar"), boldText = $("b"), linkText = $("#text-content a"), titleText = $("h5"), bodyText = $("p"), navText = $("#sidebar .nav-link");
const screenSizes = "d-xxl-block d-xl-block d-lg-block d-md-block";

for (let i = 0; i < boldText.length; i++) {
  boldText[i].style.color = "#7498d6";
  boldText[i].classList.add("semi-bold");
}

for (let i = 0; i < linkText.length; i++) {    
  linkText[i].classList.add("link");
  linkText[i].classList.add("medium");
}

for (let i = 0; i < titleText.length; i++) {
  titleText[i].style.color = "#7498d6";
  titleText[i].classList.add("bold");
}

for (let i = 0; i < bodyText.length; i++) {
  bodyText[i].style.color = "black";
  bodyText[i].classList.add("regular");
}

for (let i = 0; i < navText.length; i++) {
  navText[i].classList.add("medium");
}

// var didCollapse = false;
// $(".navbar-toggler").click(() => {
//     let dropdowns = navbar.find("li");
//     let menu = dropdowns.find(".dropdown-menu");
//     if (!didCollapse) {
//       dropdowns.addClass("dropdown-collapse");
//       dropdowns.removeClass("nav-item-hover dropdown-hover");
//       menu.removeClass("dropdown-menu-end fade-down show");
//       menu.css("position", "relative");
//     } else {
//       dropdowns.removeClass("dropdown-collapse");
//       setTimeout(() => {menu.addClass("dropdown-menu-end fade-down show");}, 250);
//       menu.css("position", "absolute");
//     }
//     didCollapse = !didCollapse;
//   }
// );


// let windowLoaded = false;
// $(window).on("load", () => { setWebsiteLayout(); windowLoaded = true; });
// $(window).on("orientationchange", setWebsiteLayout);

// function setWebsiteLayout() {
//   if ((!isPortrait() && windowLoaded) || (isPortrait() && !windowLoaded)) {
//     $("#sidebar-col").removeClass(screenSizes);
//     navbar.removeClass("navbar-expand-lg");
//     navbar.addClass("navbar-expand-xl");
//   } else {
//     $("#sidebar-col").addClass(screenSizes);
//     navbar.removeClass("navbar-expand-xl");
//     navbar.addClass("navbar-expand-lg");
//   }
// }

function isPortrait() { return ($(window).innerHeight() > $(window).innerWidth()); }

function vh(v) {
  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}