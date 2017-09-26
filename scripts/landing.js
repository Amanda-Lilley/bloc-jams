alert("Why hello there. Just testing you're awake!");
var animatePoints = function() {

  var points = document.getElementsByClassName('point');

  var revealPoint = function(index) {
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)";
    points[index].style.msTransform = "scaleX(1) translateY(0)";
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
  };

  for (var i = 0; i < points.length; i++) {
  revealPoint(i);
  }
};

animatePoints();

var spinIcons = function(){
  var icons = document.getElementsByClassName('ion');

  var spinMe = function(index){
    icons[index].style.transition = "all 3s";
    icons[index].style.transform = "rotate(360deg)";
    icons[index].style.msTransform = "rotate(360deg)";
    icons[index].style.WebkitTransform = "rotate(360deg)";
  };

  for (var i=0; i < icons.length; i++) {
  spinMe(i);
  }
};
spinIcons();
