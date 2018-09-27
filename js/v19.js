$(function(){
	console.log('Entra al js 19');

	$('body').keyup(function(event){
		if(event.keyCode == 37){
			$('.cubo').animate({'left':'-=10px'});
			console.log('left');
		}else if (event.keyCode == 39) {
			$('.cubo').animate({'left':'+=10px'});
			console.log('right');
		}else if (event.keyCode == 38) {
			$('.cubo').animate({'top':'-=10px'});
			console.log('up');
		}else if (event.keyCode == 40) {
			$('.cubo').animate({'top':'+=10px'});
			console.log('down');
		}else {
			console.log('Presione las teclas de dirección');
		}
	});

	$('#left').click(function(){
		$('.cubo').animate({'left':'-=10px'});
		console.log('left');
	});
	$('#right').click(function(){
		$('.cubo').animate({'left':'+=10px'});
		console.log('right');
	});
	$('#up').click(function(){
		$('.cubo').animate({'top':'-=10px'});
		console.log('up');
	});
	$('#down').click(function(){
		$('.cubo').animate({'top':'+=10px'});
		console.log('down');
	});
});
