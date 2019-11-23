var age = parseInt(prompt("Enter your age"));

if(isNaN(age))
	alert("Please enter a valid age");
else{
	var currentDate = new Date();
	currentDate.setFullYear(currentDate.getFullYear() - age)
	document.write(`
		Your age is : ${age}<br>
		Your birth year is : ${currentDate.getFullYear()}
		`);
}

