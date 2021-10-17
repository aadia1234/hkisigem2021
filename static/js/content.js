const navbar = $("#navbar"), boldText = $("b"), linkText = $("#text-content a"), headerText = $("h2"), subHeaderText = $("h3"), subSubHeaderText = $("h4"), bodyText = $("p"), navText = $("#sidebar .nav-link");
const screenSizes = "d-xxl-block d-xl-block d-lg-block d-md-block";

for (let t of boldText) {
  t.style.color = "#7498d6";
  t.classList.add("semi-bold");
}

for (let t of linkText) {    
  t.classList.add("link");
  t.classList.add("medium");
}

for (let t of headerText) {
  t.style.color = "#7498d6";
  t.style.fontSize = "5rem"; 
  t.classList.add("bold");
}

for (let t of subHeaderText) {
  t.style.color = "#7498d6";
  t.style.fontSize = "4rem";
  t.classList.add("semi-bold");
}

for (let t of subSubHeaderText) {
  t.style.color = "#7498d6"
  t.style.fontSize = "3rem";
  t.classList.add("medium");
}

for (let t of bodyText) {
  t.style.color = "black";
  t.classList.add("regular");
}

for (let t of navText) {
  t.classList.add("medium");
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