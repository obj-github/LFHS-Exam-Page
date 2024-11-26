$(document).ready(function() {
  // Attach a click event to the image
  $(".menu").click(function() {
    // Change the image source on click
    var currentSrc = $(this).attr("src");
      
// Toggle between "menu.svg" and "close.svg"
    var newSrc = currentSrc === "menu.svg" ? "close.svg" : "media/menu.svg";

    // Change the image source
    $(this).attr("src", newSrc);
  });
});

//Toggle out nav bar
$(function() {
    $(".menu").click(function() {
        $(".nav").toggle(500);
    });
}); 
