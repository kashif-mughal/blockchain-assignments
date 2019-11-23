var htmlContent = "<p><strong><em>Only print this</em></strong></p>";

var myElem = document.createElement("span");
myElem.innerHTML = htmlContent;
alert(myElem.innerText);