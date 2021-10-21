$(window).on("load", () => {
  const navbar = $("#navbar"), boldText = $("b"), linkText = $("#text-content a"), headerText = $("h2"), subHeaderText = $("h3:not(.contact)"), 
  subSubHeaderText = $("h4:not(.contact)"), bodyText = $("p"), navText = $("#sidebar .nav-link"), images = $("img:not(footer img):not(.card-img-top):not(#navbar img)"), profileImages = $(".member_card"),
  cards = $("profile wrapper");
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

  for (let t of images) {
    t.classList.add(...["img-fluid", "shadow", "rounded-3", "mx-auto", "d-block"]);
  }

  for (let t of cards) {
    t.classList.add("rounded-3");
  }

  for (let t of profileImages) {
    t.classList.add("rounded-3");
  }

});