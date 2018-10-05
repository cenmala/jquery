$(function(){
	console.log('Entra al js 24');
	var i = 0;
	 $("#btnElemento").click(function(){
		 var li = $('<li>',{text:'Elemento Virtual '+ ++i +' haga clic aqui'});
		 $(li).addClass('e-virtual');
		 $('#padre').append(li);

		 $(".e-virtual").click(function(){
			 console.log('Entra al clic del elemento virtual');
			 alert('Este es un elemento Virtual')
		 });
	 });
});
