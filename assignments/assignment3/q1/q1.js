
var coursesArray = [];
coursesArray[0] = "SSC";
coursesArray[1] = "HSC";
coursesArray[2] = "BCS";
coursesArray[3] = "BS";
coursesArray[4] = "BCOM";
coursesArray[5] = "MS";
coursesArray[6] = "M.PHIL.";
coursesArray[7] = "PhD";

document.write("<b>Qualifications:</b>");
document.write('<br>');

for (var i = 0; i < coursesArray.length; i++) {
	document.write(`<br>${i + 1}) ${coursesArray[i]}`);
}

