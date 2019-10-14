var colors = [];

colors[0] = 'red';
colors[1] = 'green';
colors[2] = 'blue';

document.write(colors);
document.write('<br>');

var colorAddToStart = prompt('What color do you want to add at the start?');

colors.unshift(colorAddToStart);

document.write('A.   ');
document.write(colors);
document.write('<br>');

var colorAddToEnd = prompt('What color do you want to add at the end?');

colors.push(colorAddToEnd);

document.write('B.   ');
document.write(colors);
document.write('<br>');

colors.unshift('purple','cyan');

document.write('C.   ');
document.write(colors);
document.write('<br>');

colors.shift();

document.write('D.   ');
document.write(colors);
document.write('<br>');

colors.pop();

document.write('E.   ');
document.write(colors);
document.write('<br>');


var index = prompt('On which index do you want to add color?');
var count = prompt(`Which color do you want to insert at index ${index}?`);

colors.splice(index, 0, elem);

document.write('F.   ');
document.write(colors);
document.write('<br>');


var index = prompt('From which index do you want to remove color?');
var count = prompt(`How many colors do you want to remove from index ${index}?`);

colors.splice(index, count);

document.write('G.   ');
document.write(colors);
document.write('<br>');


