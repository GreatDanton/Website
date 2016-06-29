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
$(".intro-links > div").click(function(e){
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

// ensures correct navbar style on page refresh
if ($(document).scrollTop() > $('.intro').height()) {
  $(".navbar").addClass("navbar-visible");
}

// #### FILTER PROJECTS ####
// make array out of projects for filtering

var htmlArray = $.makeArray($('.projects a'));

function showProject(classname) {
    $('.projects').html('');
    for (i = 0; i < htmlArray.length; i++) {
      if(htmlArray[i].className == "" + classname) {
        $('.projects').append(htmlArray[i]);
      }
    }
}

// show only projects with right classname;
// filtering from htmlArray
$('#showFrontend').click(function() {
  showProject('frontend');
  $('#showFrontend').addClass('active');
  $('#showAll').removeClass('active');
  $('#showPython').removeClass('active');
  $('#showRails').removeClass('active');
});


$('#showPython').click(function() {
  showProject('python');
  $('#showPython').addClass('active');
  $('#showAll').removeClass('active');
  $('#showFrontend').removeClass('active');
  $('#showRails').removeClass('active');
});


$('#showRails').click(function() {
  showProject('rails');
  $('#showRails').addClass('active');
  $('#showAll').removeClass('active');
  $('#showFrontend').removeClass('active');
  $('#showPython').removeClass('active');
});


$('#showAll').click(function() {
  $('.projects').html('');
  for (i = 0; i < htmlArray.length; i++){
    $('.projects').append(htmlArray[i]);
  }
  $('#showAll').addClass('active');
  $('#showRails').removeClass('active');
  $('#showFrontend').removeClass('active');
  $('#showPython').removeClass('active');
});


// scroll function to change style of navbar
  $(window).scroll(function(){
    var scroll = $(document).scrollTop();
    var height = $('.intro').height();
    if (scroll >= height) {
      $(".navbar").addClass("navbar-visible");
    } else {
      $(".navbar").removeClass("navbar-visible");
    }

  // fade in laptop in contact me
    var contactMeHeight = $("#contact").offset().top - 800;
    if (scroll > contactMeHeight) {

      $("#laptop-picture").fadeIn({queue: false, duration: 1000});
      $("#laptop-picture").animate({ right: "20px", top: "0"}, 1000);
    }
  });

});
