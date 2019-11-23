var numberValue;

while(true){
	var diceValue = parseInt(Math.random()*100)%7;
	if(diceValue!= 0)
	{
		document.write(`random dice value: ${diceValue}`);
		break;
	}
}

