$(function(){
	// Iterar elementos
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	alert("Tamaño arregle numbers: " + numbers.length);

	for (let num of numbers) {
		alert(num);
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
	for (let color of colors) {
		// alert("Nombre Color: "+color.colors[0].colorName);
		alert("Nombre Color: "+color.colors[p].colorName+" "+"Código Hexa Color: "+color.colors[p].colorHexa);
		console.log("Nombre Color: "+color.colors[p].colorName+" "+"Código Hexa Color: "+color.colors[p].colorHexa);
		p++;
	}
});