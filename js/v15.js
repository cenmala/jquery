$(function(){
	//metodos de teclado
	console.log('Entra al js');
	var i = 0;

	$("#textbox1").keydown(function(){
		console.log('Entra al keydown');
		$("#textbox1").css({"background-color":"#ccffcc"});
		// cuentaCaracteres($("#textbox1").val());
	});

	
	$("#textbox1").keyup(function(){
		console.log('Entra al keyup');
		$("#textbox1").css({"background-color":"#ffffff"});
		cuentaCaracteres($("#textbox1").val());
	});

	$("#textbox1").keypress(function(){
		console.log('Entra al keypress');
		$("#spam-numero").text(i += 1);
		// cuentaCaracteres($("#textbox1").val());
	});

	$("#textbox1").change(function(){
		console.log('Entra al change');
		$("#spam-numero").text(i += 1);
		cuentaCaracteres($("#textbox1").val());
	});

	function cuentaCaracteres(cadena){
		//se puede revisar lo que pasa cuando se llama en el keydown y en el keypress
		console.log(cadena);
		console.log(cadena.length);

	};
});