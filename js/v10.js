$(function(){
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	console.log("Tamaño del arreglo 1: "+numbers.length);
	$.each(numbers,function(i,value){
		console.log(i+":"+value);
	});

	var numbers2 = [0,1,2,3,4,5,6,7,8,9];
	console.log("Tamaño del arreglo 2: "+numbers2.length);
	for (var i = 0; i < numbers2.length; i++) {
		console.log(numbers2[i]);
	}
});