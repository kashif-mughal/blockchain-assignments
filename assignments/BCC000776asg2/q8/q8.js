var inputNumber = parseFloat(prompt("Enter a number"));

if(isNaN(inputNumber)){
	alert("Please enter a valid number");
}
else if(inputNumber % 3 == 0){
	alert(`Yes "${inputNumber}" is divisibled by 3`);
}
