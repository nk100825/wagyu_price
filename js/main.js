$(function(){
  $("#page-top").click(function(){
    var speed = 2000;
    var position = $('html').offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});