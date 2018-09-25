$(function(){
	//metodos de teclado
	console.log('Entra al js');
	
	$("#textbox1").keydown(function(){
		console.log('Entra al keydown');
		$("#textbox1").css({"background-color":"#ccffcc"});
	});

	
	$("#textbox1").keyup(function(){
		console.log('Entra al keyup');
		$("#textbox1").css({"background-color":"#ffffff"});
	});

	var i = 0;
	$("#textbox1").keypress(function(){
		console.log('Entra al keypress');
		$("#spam-numero").text(i += 1);
		cuentaCaracteres($("#textbox1").val());
	});

	function cuentaCaracteres(cadena){
		var j = cadena.length;
		j = j+1;
		console.log("La cadena mide: "+j);
	};
});