$(document).ready(function($) {
	
	$('.nav__item').on('click',function(){
		
		$(this).addClass('nav__item--active').siblings().removeClass('nav__item--active');;

	});


});