$(function(){
	console.log('Entra al js 25');
	var cad = '{"Nombre":"Cesar","Apellido":"Manrique","Edad":36}';
	console.log(cad);
	var obj = JSON.parse(cad);
	console.log(obj);
	console.log("Nombre: "+obj.Nombre);
	console.log("Apellido: "+obj.Apellido);
	console.log("Edad: "+obj.Edad);
});
