var oldDate = new Date('1970-01-01 00:00:00');
var currentDate = new Date();

var differernceMiliSeconds = currentDate - oldDate;
var differenceMinutes = differernceMiliSeconds / (60 * 60);
document.write(`
	Current date : ${currentDate}<br>
	Elapsed milliseconds since January 1, 1970: ${differernceMiliSeconds}<br>
	Elapsed minutes since January 1, 1970: ${differenceMinutes}
	`);

