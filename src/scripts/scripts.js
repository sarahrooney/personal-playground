function loadGradient(){
  var windowHeight = window.innerHeight;
  var body = document.querySelector('body');
  body.style.minHeight = windowHeight + 'px';
};

loadGradient();

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;


var enterLink = document.querySelector('.welcome-msg');
var computerFace = document.querySelector('.welcome-wrapper__face');

enterLink.addEventListener("mouseenter", function(){
  computerFace.style.animation = 'flicker 2s'
  setTimeout(function(){
    computerFace.style.opacity = 1;
  }, 1800);
});

function turnCompOff(){
  enterLink.addEventListener("mouseout", function(){
    computerFace.style.animation = 'none';
    computerFace.style.opacity = 0;
  });
}

turnCompOff();
