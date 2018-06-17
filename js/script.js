
$(function(){
  //Slider de imagens
  $('.slider').cycle({
  	fx:'shuffle',
  	timeout: 4000,
  	pager: $('.pager'),
  	pagerAnchorBuilder: function (index, DOMelement){
  		return '<a></a>';
  	},
  	activePagerClass: 'sliderativadinho'  
  });
  //Efeitos Jquery no Menu
  $('.dropbtn').hover(function(){
    $('.dropdown-content').fadeIn(500);
  });
  $('.dropdown').mouseout(function(){
    $(this).css("background-color","white");
    $(this).css("color","#37C482");
  });
  $('.dropdown').mouseleave(function(){
    $('.dropdown-content').fadeOut(500);
  });
  $('.navbar li').mouseenter(function(){
    $(this).css("border-bottom","6px solid #37C482")
  });
  $('.navbar li').mouseleave(function(){
    $(this).css("border-bottom","6px solid white")
  });
  $('.logo').hover(function(){
    $(this).css("border-bottom","6px solid white")
    $('.dropdown-content').fadeOut(500);
  });
});


