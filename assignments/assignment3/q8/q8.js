var counting = [];
var reverseCounting = [];
var even = [];
var odd = [];
var series = [];

for (var i = 1; i < 16; i++) {
	counting.push(i);
}

for (var i = 10; i > 0; i--) {
	reverseCounting.push(i);
}

for (var i = 0; i <=20 ; i+=2) {
	even.push(i);
}

for (var i = 1; i < 20 ; i+=2) {
	odd.push(i);
}

for (var i = 2; i <= 20 ; i+=2) {
	series.push(i + 'k');
}

document.write(counting);
document.write('<br>');

document.write(reverseCounting);
document.write('<br>');

document.write(even);
document.write('<br>');

document.write(odd);
document.write('<br>');

document.write(series);
document.write('<br>');