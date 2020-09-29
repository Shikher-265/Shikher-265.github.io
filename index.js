var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() {

    divs.eq(i).fadeIn(600)
              .delay(1200)
              .fadeOut(600, cycle);

    i = ++i % divs.length;

})();
// $(".profile2").hide();
//
// $("#About").mouseenter(function(){
//   $(".profile2").fadeIn("slow");
// });
//
// $("#About").mouseleave(function(){
//   $(".profile2").fadeOut("slow");
// });

$("#btnskill").hide();
$(document).ready(function(){
$("#Skillsborder").mouseenter(function(){
  var mov=$("#btnskill");
  // mov.css({left:0});
  mov.fadeIn("slow");
  mov.animate({left:"500px"});
});
});
