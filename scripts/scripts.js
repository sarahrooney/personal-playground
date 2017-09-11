function loadGradient(){
  var windowHeight = window.innerHeight;
  var body = document.querySelector('body');
  body.style.minHeight = windowHeight + 'px';
};

loadGradient();

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

function rainGifs(){
  var flowerRain = document.querySelector('flower');
  flowerRain.style.position = "absolute";
  flowerRain.style.left = 200 + "px";
}

rainGifs();
