$(function(){
	// Iterar elementos
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	
	$.each(numbers,function(i,value){
		alert("Recorriendo con each "+i+":"+value);
		console.log(i+":"+value);
	});

	alert("Tamaño arregle numbers: " + numbers.length);

	// for (var i = 0; i < numbers.length; i++) {
	// 	alert("Recorriendo con for "+i+":"+numbers[i]);
	// 	console.log(i+":"+numbers[i]);
	// }

});