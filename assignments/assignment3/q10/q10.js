var a = [20,53,78,4,91,12];

document.write('Original array is: ');
document.write(a);

function sorting(a,b){
	return a-b;
}

a.sort(sorting);

document.write('<br>Sorted array is: ');
document.write(a);