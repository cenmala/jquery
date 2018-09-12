$(function(){
	// show and hide

	$('.saludo').css({'background-color':'DodgerBlue','text-align':'center'});
	
	if($('#parrafo').hasClass('saludo')){
		alert('Si tiene la clase saludo y ocultar pero con show lo mostramos');
		$('#parrafo').removeClass('saludo');
		$('#parrafo').show(2000)
	}else{
		alert('No tiene la clase saludo');
		$('div').addClass('contenedor');
		$('div').hide(2000);
		// $('#parrafo').addClass('saludo');
	}
});