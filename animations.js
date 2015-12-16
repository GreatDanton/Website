$(document).ready(function(){

function goToByScroll(id) {
  id = id.replace("link", "");

  $('html, body').animate({
    scrollTop: $("#"+id).offset().top - 50}, 'slow');
}
// click on hamburger show modal
$(".c-hamburger").click(function(e){
  e.preventDefault();
  $(".c-hamburger").addClass("c-hamburger-clicked");
  $("#navbar-modal").fadeIn(500);
  $(".modal-background").fadeIn(500);
});

// close modal with clicking on x
$(".modal-close").click(function(e){
  e.preventDefault();
  $("#navbar-modal").fadeOut(300);
  $(".modal-background").fadeOut(300);
  $(".c-hamburger").removeClass("c-hamburger-clicked");
});

// close modal with clicking on background
$(".modal-background").click(function(e){
  e.preventDefault();
  $("#navbar-modal").fadeOut(300);
  $(".modal-background").fadeOut(300);
  $(".c-hamburger").removeClass("c-hamburger-clicked");
});

// scroll when navbar link is pressed
$(".navbar-links").click(function(e){
  e.preventDefault();
  goToByScroll($(this).attr("id"));
});

// scroll when button in intro-links is pressed
$(".intro-links > button").click(function(e){
  e.preventDefault();
  goToByScroll($(this).attr("id"));
});

$(".modal-links").click(function(e){
  $(".modal").fadeOut(300);
  $(".modal-background").fadeOut(300);
  $(".c-hamburger").removeClass("c-hamburger-clicked");
  goToByScroll($(this).attr("id"));
});

// scroll to top of the page when back-to-top is pressed
$("#back-to-top").click(function(){
  $('html, body').animate({
    scrollTop: 0}, 'slow');
});
  $("#laptop-picture").hide();
  $("#laptop-picture").animate({top: "-20px"}, 0);

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();
    var height = $('.intro').height();
    if (scroll >= height) {
      $(".navbar").addClass("navbar-visible");
      $(".navbar-links").addClass("underline-from-left");
      $("#githublink").addClass("underline-from-left");
      //$("#c-hamburger-span").css("background-color", "black");
    } else {
      $(".navbar").removeClass("navbar-visible");
      $(".navbar-links").removeClass("underline-from-left");
      $("#githublink").removeClass("underline-from-left");
      //$("#c-hamburger-span").css("background-color", "white");
    }

  // fade in laptop in contact me
    var contactMeHeight = $("#contact").offset().top - 800;
    if (scroll > contactMeHeight) {

      $("#laptop-picture").fadeIn({queue: false, duration: 1000});
      $("#laptop-picture").animate({ right: "20px", top: "0"}, 1000);
    }
  });

});
