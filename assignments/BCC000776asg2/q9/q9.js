var inputNumber = parseFloat(prompt("Enter a number"));

if(isNaN(inputNumber)){
	alert("Please enter a valid number");
}
else if(inputNumber % 2 == 0){
	alert(`The input number is even`);
}
else
	alert(`The input number id odd`);
