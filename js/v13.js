$(function(){
	console.log('Entra al js');
	$('#img-coco').click(function(){
		console.log("Entra al clic");

		if($('#img-coco').width()==300){
			console.log($('#img-coco').width());
			$('#img-coco').width(630);
			$('#img-coco').height(630);
		}else{
			console.log($('#img-coco').width());
			$('#img-coco').width(300);
			$('#img-coco').height(300);
		}
	});
	console.log("width: "+ $('#img-coco').width());
	console.log("height: "+ $('#img-coco').height());
});