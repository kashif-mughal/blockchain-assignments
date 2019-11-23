var firstNumber = parseFloat(prompt("Enter first number"));
var secondNumber = parseFloat(prompt("Enter second number"));
var operation = prompt("Enter operation one of from '+, -, *, /, %'");

if(isNaN(firstNumber)){
	alert("Please enter a valid number");
}
else if(isNaN(firstNumber)){
	alert("Please enter a valid number");
}
else if(operation != '+' && operation != '-' && operation != '*' && operation != '/' && operation != '%'){
	alert("Please choose operation one of from '+, -, *, /, %'");
}
else{
	var result = calculateResult(firstNumber, secondNumber, operation);
	if(result)
		document.write(`
			${firstNumber} ${operation} ${secondNumber} = ${result};
			`);
}

function calculateResult(firstNumber, secondNumber, operation){
	if(operation == '+')
		return firstNumber + secondNumber;
	else if(operation == '-')
		return firstNumber - secondNumber;
	else if(operation == '*')
		return firstNumber * secondNumber;
	else if(operation == '/')
		return firstNumber / secondNumber;
	else if(operation == '%')
		return firstNumber % secondNumber;
	else
		return null;
}