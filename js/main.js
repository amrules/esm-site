
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("header");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $(".top-hero").addClass("shrink");
    $("#hide-me").addClass("hidden");
    $("#hide-me-two").addClass("hidden");
    
  }
  else
  {
    $(".top-hero").removeClass("shrink");
    $("#hide-me").removeClass("hidden");
    $("#hide-me-two").removeClass("hidden");
  }
});

