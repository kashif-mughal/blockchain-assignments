var numberValue = prompt("Enter positive value");
numberValue = parseFloat(numberValue);
if(isNaN(numberValue)){
	alert("Value is not a number");
}
else if(numberValue <= 0){
	alert("Please enter value greater then 0");
}


var roundValue = Math.round(numberValue);
var cielValue = Math.ceil(numberValue);
var floorValue = Math.floor(numberValue);

document.write(`number: ${numberValue}<br>`);
document.write(`round off value: ${roundValue}<br>`);
document.write(`ceil value: ${cielValue}<br>`);
document.write(`floor value: ${floorValue}<br>`);
