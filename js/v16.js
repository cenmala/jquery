$(function(){
	//metodos de teclado
	console.log('Entra al js 16');

	$('#icon').mousedown(function(){
		$("#icon").addClass("fa-volume-off").removeClass("fa-volume-up");
	});

	$('#icon').mouseup(function(){
		$("#icon").addClass("fa-volume-up").removeClass("fa-volume-off");
	});

	$('#icon2').mouseover(function(){
		$("#icon2").addClass("fa-volume-off").removeClass("fa-volume-up");
	});

	$('#icon2').mouseleave(function(){
		$("#icon2").addClass("fa-volume-up").removeClass("fa-volume-off");
	});
});