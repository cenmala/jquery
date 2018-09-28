$(function(){
	console.log('Entra al js 21');

	// $('body').css({'height':'1500px'});

	$('#up').click(function(){
		$('body').animate({scrollTop: 0},'700');
		// console.log('Entra al clic de UP
	});

	var scro = 500;
	$(window).scroll(function(){
		if($(this).scrollTop()>scro){
			console.log('A bajado mas de '+scro+' pixeles');
		}else {
			console.log('Esta por encima de los '+scro+' pixeles');
		}
	});
});
