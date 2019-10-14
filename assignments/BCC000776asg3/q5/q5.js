var arr1 = [3, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function unique(value, index, self){
	return self.indexOf(value) === index;
}

var uniqueValues = arr1.filter(unique);
document.write(uniqueValues);