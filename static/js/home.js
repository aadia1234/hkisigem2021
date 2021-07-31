

$("#arrow-down-circle").click(function() {
  console.log("clicked");
  $('html, body').animate({
      scrollTop: $("#info").offset().top
  }, 100);
});

wavify(document.querySelector('#wave1'), {
  height: 50,
  bones: 5,
  amplitude: 50,
  color: '#30cfd0',
  speed: .25
});

wavify(document.querySelector('#wave2'), {
  height: 40,
  bones: 7,
  amplitude: 60,
  color: '#309dd0',
  speed: .5
});

function createBubble() {
  const section = document.getElementById("sea-animation");
  const createElement = document.createElement("span");
  var size = randInt(2, 6);

  createElement.style.width = size + "vh";
  createElement.style.height = size + "vh";
  createElement.style.left = (randInt(100, innerWidth-100)) + "px";
  createElement.style.padding = 3 + "vh";
  createElement.className = "bubble";
  section.appendChild(createElement);

  setInterval(() => {
    if (didCollide(createElement, document.getElementById("wave-wrapper"))) {
      // console.log("Collision Detected!");
      createElement.remove();
    }
  }, 1)
  // setTimeout(() => {
  //   createElement.remove();
  // }, 10000);
}

setInterval(createBubble, 500);

function didCollide(a, b) {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return !(aRect.top > (bRect.top));

  // return !(
  //     ((aRect.top + aRect.height) < (bRect.top)) ||
  //     (aRect.top > (bRect.top + bRect.height)) ||
  //     ((aRect.left + aRect.width) < bRect.left) ||
  //     (aRect.left > (bRect.left + bRect.width))
  // );
}


function randInt(min, max) {
  return Math.random() * (max-min) + min;
}