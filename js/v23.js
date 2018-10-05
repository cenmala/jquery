$(function(){
	console.log('Entra al js 23');

	 $("#informacion").click(function(){
		 var hijos = $('#padre').children().text();
		 var padre = $('.hijo').parent();
		 var hermanos = $('.hijo').siblings().text();
		 console.log('Los hijos son: '+hijos);
		 console.log(padre);
		 console.log('Los hermanos son: '+hermanos);
	 });
});
