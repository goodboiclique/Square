$(document).ready(function(){
   $('.icon-menu').click(function(event){
      $('.icon-menu, .menu__body').toggleClass('active'),
      $('body').toggleClass('lock'),
      $('.slider').slick({
         arrows:false,
         dots:true,
         adaptiveHeight: true
      });
   });
});
function ibg(){
   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   ibg();
   $(document).ready(function(){
      $('.slider').slick({
         arrows:false,
         dots:true,
         adaptiveHeight: true,
      });
   });
