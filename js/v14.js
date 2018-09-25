$(function(){
	//Efectos

	console.log('Entra al js');
	$('#btn-mostrar').click(function(){
		console.log("Entra al clic mostrar");
		$("#img-coco").slideDown(3000);
	});
	$('#btn-ocultar').click(function(){
		console.log("Entra al clic ocultar");
		$("#img-coco").slideUp(3000);
	});

	$('#btn-mostrar1').click(function(){
		console.log("Entra al clic mostrar1");
		$("#img-coco").fadeIn(3000);
	});
	$('#btn-ocultar1').click(function(){
		console.log("Entra al clic ocultar1");
		$("#img-coco").fadeOut(3000);
	});

	$('#btn-mostrar2').click(function(){
		console.log("Entra al clic mostrar2");
		$("#img-coco").animate({height:'600px'},3000);
	});
	$('#btn-ocultar2').click(function(){
		console.log("Entra al clic ocultar2");
		$("#img-coco").animate({width:'600px'},3000);
	});

	$('#btn-mostrar3').click(function(){
		console.log("Entra al clic mostrar3");
		$("#img-coco").animate({height:'300px'},3000);
	});
	$('#btn-ocultar3').click(function(){
		console.log("Entra al clic ocultar3");
		$("#img-coco").animate({width:'300px'},3000);
	});
});