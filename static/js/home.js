const boldText = $("b");

$("#arrow-down-circle").click(function() {
  $('html, body').animate({
      scrollTop: $("#info").offset().top
  }, 100);
});

wavify($('#wave1'), {
  height: 50,
  bones: 5,
  amplitude: 50,
  color: '#30cfd0',
  speed: .25
});

wavify($('#wave2'), {
  height: 40,
  bones: 7,
  amplitude: 60,
  color: '#309dd0',
  speed: .5
});

setInterval(() => {
  const span = $("<span></span>");
  const size = randInt(2, 6);

  span.css({
    width: size + "vh",
    height: size + "vh",
    left: (randInt(100, $(window).innerWidth()-100)) + "px",
    padding: "3vh",
    className: "bubble"
  });
  
  $(span).appendTo("document.body, #sea-animation");
  if (didCollide(span[0], $("#wave-wrapper")[0])) { span.remove(); }

}, 3000);


for (let i = 0; i < boldText.length; i++) {
  boldText[i].style.color = "#eee4d1";
  boldText[i].classList.add("semi-bold");
}


function didCollide(a, b) {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return !(aRect.top > (bRect.top));
}


function randInt(min, max) {
  return Math.random() * (max-min) + min;
}