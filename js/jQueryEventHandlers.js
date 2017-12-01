
$(document).ready(function(){
	$('h1').animate({left:"0"},500);
	$('footer').fadeIn(1000);
	
	$('.help-text').click(function(){
		$('.help-text').text('This is a form. Please fill it out. Simple as that.');
	});
	
	$('input').focusin(function(){
		$('input').addClass('active-input');
	});
});
