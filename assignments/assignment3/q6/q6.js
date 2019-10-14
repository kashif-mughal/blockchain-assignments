var cities = ["Karachi", "Lahore", "Islamabad", "Faysalabad"];
var o = ["th","st","nd","rd"];

for (var i = 0; i < cities.length; i++) {
	if(o[i + 1] != undefined)
		document.write(`${i + 1}${o[i + 1]} choice is ${cities[i]} <br>`);
	else
		document.write(`${i + 1}${o[0]} choice is ${cities[i]} <br>`);
}