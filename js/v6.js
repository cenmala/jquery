// alert('Hola los saluda Cesar desde v6.j6');

// var saludo = $('.saludo').html();
// alert(saludo);

var clase = $('h1').attr('class');
alert(clase);

$('h1').attr('class','h1_saludo');
var claseNew = $('h1').attr('class');
alert(claseNew);

var idp = $('p').attr('id');
alert(idp);

$('p').attr('id','parrafo_nuevo');
var idpNew = $('p').attr('id');
alert(idpNew);

$('.h1_saludo').attr('class','saludo-modificado');
$('#parrafo_nuevo').attr('id','parrafo-modificado');