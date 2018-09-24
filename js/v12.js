$(function(){
	console.log('entra al js');
	//Metodo attr
	$('#img-coco').click(function(){
		console.log('entra al click');
		if($("#img-coco").attr('src')=="img/coco2.jpg"){
			$("#img-coco").attr('src', 'img/coco.jpg');
			$("#img-coco").removeAttr('width');
		}else{
			$("#img-coco").attr('src', 'img/coco2.jpg');
			$("#img-coco").attr('width', 300);
		}
		// console.log($("#img-coco").attr('src'));

	});

});