var password = prompt("Enter a password");
if(!password){
    alert("Invalid password");
    }
else if(!isNaN(password[0])){
    alert("Password should not start with number");
    }
else if(password.length < 8){
    alert("Password length should at least 8 characters");
    }
else{
	var isCorrect = true;
    for(var i = 0; i< password.length; i++){
        if(!((password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) || (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122))){
        	alert("password should contain only a-z, A-Z or 0-9");
        	isCorrect = false;
        	break;
        }
    }
    if(isCorrect)
    	alert("Correct password");
}