var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < b.length; i++) {
	if(a.indexOf(b[i]) == -1)
		a.push(b[i]);
}

document.write(a);