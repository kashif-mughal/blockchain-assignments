var inputNumber = "";
inputNumber = prompt("Enter a number");

if(isNaN(parseInt(inputNumber)))
	alert("Please enter a valid number");
else{
	var sum = 0;
	for(var i = 0; i< inputNumber.length; i++){
		sum += parseInt(inputNumber[i]);
	}
	var mean = sum / inputNumber.length;

	document.write(`
		<b>Input :   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Output : </b><br>
		${inputNumber}&nbsp;&nbsp;&nbsp;----->&nbsp;&nbsp;&nbsp;${mean}
		`);
}

