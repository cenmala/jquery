$(function(){
	//metodo data
	console.log('Entra al js 17');


	// Metodo 1
	$('#icon1').mousedown(function(){
		$("#icon1").data('status','cambiando');
		$("#icon1").addClass('fa-volume-off').removeClass('fa-volume-up');
		$("#icon1").css('color','orange');
		console.log($("#icon1").data('status'));
	});

	$('#icon1').mouseup(function(){
		$("#icon1").data('status','cambió');
		$("#icon1").addClass('fa-volume-up').removeClass('fa-volume-off');
		$("#icon1").css('color','green');
		console.log($("#icon1").data('status'));
	});

	//Metodo 2
	$("#icon2").data('atrib',{nombre:'fa-volume-off',color:'red'});
	var icon = $('#icon2').data('atrib');
	console.log(icon.nombre);

	$('#icon2').mousedown(function(){
		$("#icon2").addClass(icon.nombre).removeClass('fa-volume-up');
		$("#icon2").css('color',icon.color);
	});

	$('#icon2').mouseup(function(){
		$("#icon2").addClass('fa-volume-up').removeClass(icon.nombre);
		$("#icon2").css('color','black');
	});

	$('#colors li').each(function(index,value){
		$('#colors').data('nombre',index);
		console.log($('#colors').data('nombre'));
	});

	$('#colors li').each(function(index,value){
		$('#colors').data('nombre',value);
		console.log($('#colors').data('nombre'));
	});


});
