$(function(){
	$('.saludo').css({'background-color':'DodgerBlue','text-align':'center'});
	if($('#parrafo').hasClass('saludo')){
		alert('Si tiene la clase Saludo');
		$('#parrafo').removeClass('saludo');
	}else{
		alert('No tiene la clase saludo');
		$('div').addClass('contenedor');
		$('#parrafo').addClass('saludo');
	}
});