var englishMarks = prompt("Enter marks in English");
var urduMarks = prompt("Enter marks in Urdu");
var mathsMarks = prompt("Enter marks in Maths");

var totalMarks = prompt("Enter total marks");

englishMarks = parseFloat(englishMarks);
urduMarks = parseFloat(urduMarks);
mathsMarks = parseFloat(mathsMarks);

if(isNaN(totalMarks))
	alert("Total marks must be a number");
else if(isNaN(englishMarks))
	alert("English marks must be a number");
else if(isNaN(urduMarks))
	alert("Urdu marks must be a number");
else if(isNaN(mathsMarks))
	alert("Maths marks must be a number");
else{
	var percentage = ((englishMarks + urduMarks + mathsMarks) / totalMarks) * 100;
	percentage = percentage.toFixed(2);
	var commonText = `
					<h2>Marks Sheet</h2>
					Total marks : ${totalMarks}<br>
					Marks obtained : ${(englishMarks + urduMarks + mathsMarks)}<br>
					percentage : ${percentage}<br>`;
	if(percentage >= 80)
	{
		document.write(`
			${commonText}
			Grade : A-one<br>
			Remarks : Excellent
			`);
	}
	else if(percentage >= 70)
	{
		document.write(`
			${commonText}
			Grade : A<br>
			Remarks : Good
			`);
	}
	else if(percentage >= 60)
	{
		document.write(`
			${commonText}
			Grade : B<br>
			Remarks : You need to improve
			`);
	}
	else
	{
		document.write(`
			${commonText}
			Grade : Fail<br>
			Remarks : Sorry
			`);
	}
}

