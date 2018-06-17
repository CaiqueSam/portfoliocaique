
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
});
$(function(){
  //Fade in e Fade out no Menu dropdown
  $('.dropbtn').hover(function(){
    $('.dropdown-content').fadeIn(500);
  });
  $('.dropdown').mouseleave(function(){
    $('.dropdown-content').fadeOut(500);
  });
  //Hover no menu
  $('.navbar li').mouseenter(function(){
    $(this).css("border-bottom","6px solid #37C482")
  });
  $('.navbar li').mouseleave(function(){
    $(this).css("border-bottom","6px solid white")
  });
  $('.logo').hover(function(){
    $(this).css("border-bottom","6px solid white")
  });
});


