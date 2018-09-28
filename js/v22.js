$(function(){
	console.log('Entra al js 22');
	var i = 0;

	$('#exe1').click(function(){
		$('ol').append('hola');
	});

	$('#exe2').click(function(){
		i++;
		$('ol').append('<li>Texto '+i+' insertado con jQuery</li>');
	});

	$('#exe3').click(function(){
		i++;
		$('ol').prepend('<li>Texto '+i+' insertado con jQuery</li>');
	});

	$('#exe4').click(function(){
		i++;
		$('ol').append($('ol li:first'));
	});
});
