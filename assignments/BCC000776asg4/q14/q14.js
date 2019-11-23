var currentDate = new Date();
var oneHourAheadDate = new Date();

oneHourAheadDate.setHours(currentDate.getHours() - 1);

document.write(`
	Current date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${currentDate}<br>
	1 hour ago, it was ${oneHourAheadDate}
	`);

