var fuel = prompt("Enter fuel in leters");
var fuel = parseFloat(fuel);
if(isNaN(fuel)){
	alert("Please enter a valid number");
}
else{
	if(fuel < 0.25){
		alert("Please refill the fuel in your car");
	}
}

