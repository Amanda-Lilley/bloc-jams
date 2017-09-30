var icons = document.getElementsByClassName('ion');

var spinMe = function(ion) {
  ion.style.transition = "all 3s";
ion.style.transform = "rotate(360deg)";
ion.style.msTransform = "rotate(360deg)";
  ion.style.WebkitTransform = "rotate(360deg)";
};

var spinIcons = function(icons) {
  forEach(icons, spinMe);
};

window.onload = function() {

  if (window.innerHeight > 950) {
        spinIcons(i);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener("scroll", function(event) {
      if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
        spinIcons(icons);
      }
    });
  }







    // var animatePoints = function() {
    //
    //   var points = document.getElementsByClassName('point');
    //
    //   var revealPoint = function(index) {
    //     points[index].style.opacity = 1;
    //     points[index].style.transform = "scaleX(1) translateY(0)";
    //     points[index].style.msTransform = "scaleX(1) translateY(0)";
    //     points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    //   };
    //
    //   for (var i = 0; i < points.length; i++) {
    //   revealPoint(i);
    //   }
    // };

    // animatePoints();
