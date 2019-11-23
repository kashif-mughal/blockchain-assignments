var email = prompt("Enter your email");
	var indexOfAt = email.indexOf('@');
	var lastIndexOfDot = email.lastIndexOf('.');
	
	if(!email){
		alert("provide valid email");
	}
	else if(indexOfAt == -1){
		alert("email must contain @");
	}
	else if(indexOfAt == 0){
		alert("atleast one character must place before @");
	}
	else if(lastIndexOfDot == -1){
		alert(". should be in email");
	}
	else if(lastIndexOfDot <= indexOfAt + 1){
		alert(". must be place after @ with at least one character ahead");
	}
	else if(!email[lastIndexOfDot + 1]){
		alert("atleast on character must place after . (Dot)");
	}
	else{
		alert("Yes this is a valid email");
	}