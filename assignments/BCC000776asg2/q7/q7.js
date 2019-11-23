var secretNumber = Math.floor(Math.random() * 100 / 10);
var guessedNumber = prompt("Enter guess number");
guessedNumber = parseFloat(guessedNumber);
if(isNaN(guessedNumber)){
	alert("Please enter a valid number");
}
else if(guessedNumber < 0 || guessedNumber > 10){
	alert("Please enter a number from 0 to 10");
}
else{
	if(guessedNumber == secretNumber){
		alert("Bingo! Correct answer");
	}
	else if(guessedNumber + 1 == secretNumber){
		alert("Close enough to the correct answer");
	}
}