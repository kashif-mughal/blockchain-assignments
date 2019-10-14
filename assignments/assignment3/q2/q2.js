var studentNames = [];
studentNames[0] = "Michel";
studentNames[1] = "Michel";
studentNames[2] = "Michel";

var studentMarks = [];
studentMarks[0] = 320;
studentMarks[1] = 230;
studentMarks[2] = 480;

var totalMarks = 500;

document.write(`<br>Score of ${studentNames[0]} is ${studentMarks[0]}. Percentage: ${(studentMarks[0] / totalMarks) * 100}%`);
document.write(`<br>Score of ${studentNames[1]} is ${studentMarks[1]}. Percentage: ${(studentMarks[1] / totalMarks) * 100}%`);
document.write(`<br>Score of ${studentNames[2]} is ${studentMarks[2]}. Percentage: ${(studentMarks[2] / totalMarks) * 100}%`);

