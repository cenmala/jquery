$(function(){
	console.log('Entra al js 18');

	$('#left').click(function(){
		$('.cubo').animate({'left':'-=10px'})
		console.log('left');
	});
	$('#right').click(function(){
		$('.cubo').animate({'left':'+=10px'})
		console.log('right');
	});
	$('#up').click(function(){
		$('.cubo').animate({'top':'-=10px'})
		console.log('up');
	});
	$('#down').click(function(){
		$('.cubo').animate({'top':'+=10px'})
		console.log('down');
	});
});
