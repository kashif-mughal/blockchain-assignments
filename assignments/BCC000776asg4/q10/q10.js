var inputNumber = parseFloat(prompt("Enter a number"));
var inputDecimalPlaces = parseFloat(prompt("Enter decimal places"));

if(isNaN(inputNumber))
	alert("Please enter a valid number");
else if(isNaN(inputDecimalPlaces))
	alert("Please enter a valid decimal places in number");
else{
	document.write(`
		<b>Input :                  Output : </b><br>
		${inputNumber}         ----->     ${inputNumber.toFixed(inputDecimalPlaces)}
		`);
}

