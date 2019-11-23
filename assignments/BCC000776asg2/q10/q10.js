var temperature = parseFloat(prompt("Enter a temperature"));

if(isNaN(temperature)){
	alert("Please enter a valid number");
}
else if(inputNumber > 40){
	alert(`It is too hot outside`);
}
else if(inputNumber > 30){
	alert(`The Weather today is Normal`);
}
else if(inputNumber > 20){
	alert(`Today’s Weather is cool`);
}
else if(inputNumber > 10){
	alert(`OMG! Today’s weather is so Cool`);
}