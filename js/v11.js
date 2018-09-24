$(function(){
	// Iterar elementos con for of
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	console.log("Tamaño arregle numbers: " + numbers.length);

	for (let num of numbers) {
		// alert(num);
		console.log(num);
	}

	var colors = [{
		"colors":[{
			"colorName":"Red",
			"colorHexa":"#DF0101"
		},
		{
			"colorName":"yellow",
			"colorHexa":"#FFFF00"
		},
		{
			"colorName":"pink",
			"colorHexa":"#F781F3"
		}]
	}];

	var p = 0;
	var q = 1;
	var r = 2;

	for (let color of colors) {
		// alert("Nombre Color: "+color.colors[p].colorName+" "+"Código Hexa Color: "+color.colors[p].colorHexa);
		// alert("Nombre Color: "+color.colors[q].colorName+" "+"Código Hexa Color: "+color.colors[q].colorHexa);
		// alert("Nombre Color: "+color.colors[r].colorName+" "+"Código Hexa Color: "+color.colors[r].colorHexa);
		console.log("Nombre Color: "+color.colors[p].colorName+" "+"Código Hexa Color: "+color.colors[p].colorHexa);
		console.log("Nombre Color: "+color.colors[q].colorName+" "+"Código Hexa Color: "+color.colors[q].colorHexa);
		console.log("Nombre Color: "+color.colors[r].colorName+" "+"Código Hexa Color: "+color.colors[r].colorHexa);
		
	}

	console.log("Arreglo de "+colors.length);

	for (var i = 0; i < 3; i++) {
		// console.log(i);
		for (let color of colors) {
			console.log("Nombre Color: "+color.colors[i].colorName+" "+"Código Hexa Color: "+color.colors[i].colorHexa);
		}
	}

});