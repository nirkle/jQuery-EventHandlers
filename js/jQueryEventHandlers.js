
$(document).ready(function(){
	var helpMessage = 'This is a form. Please fill it out. Simple as that.';
	
	$('h1').animate({left:"0"},500);
	$('footer').fadeIn(1000);
	
	$('.help-text').click(function(){
		$('.help-text').text(helpMessage);
	});
	
	$('input').focusin(function(){
		$(this).addClass('active-input');
	});
	
	$('input').focusout(function(){
		$(this).removeClass('active-input');
	});
});
