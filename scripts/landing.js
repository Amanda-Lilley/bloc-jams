// var icons = document.getElementsByClassName('ion');

// var spinMe = function(ion) {
var spinMe = function() {

  var spinIcons = function() {
    // forEach(icons, spinMe);
    $(this).css({
      "transition": "all 3s",
      "transform": "rotate(360deg)"
    });
  };
  $.each($('.ion'), spinIcons);
};

spinMe();




$(window).load = function() {

  if ($(window).height > 950) {
    spinIcons();
  }
  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollDistance) {
      spinIcons();
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
