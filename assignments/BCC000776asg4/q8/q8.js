var number = parseInt(prompt("enter number"));
var words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
			"Sixteen", "Seventeen", "Eignteen", "Nineteen", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty"];
if((number / 20 ) <= 1)
	alert(words[number - 1]);
else{
	number = number.toString();
	var firstPart = number[0];
	var secondPart = number[1];
	var output = words[17 + parseInt(firstPart)];
	output += secondPart != 0 ? (" " + words[secondPart - 1]) : "";
	alert(output);
}