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
		$('ol').append($('ol li:first'));
	});

	$('#exe5').click(function(){
		$('ol').prepend($('ol li:last'));
	});

	$('#exe6').click(function(){
		var clon = $('ol li:last').text();
		console.log(clon);
		$('#clonado').append(clon);
		$('ol').prepend($('ol li:last'));
	});

	$('#exe7').click(function(){
		$('ol li:last').remove();
	});

});
