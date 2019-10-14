var a = [24,53,78,91,12];

var largest = -1;

for (var i = 0; i < a.length; i++) {
	if(a[i] > largest)
		largest = a[i];
}

document.write('<b>Array items: </b>');
document.write(a);

document.write('<br><b>The largest number is: </b>')
document.write(largest);