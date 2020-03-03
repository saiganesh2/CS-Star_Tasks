function clicked(){

var user = document.getElementById("username");
var pass = document.getElementById("password");


var coruser = "csstar";
var corpass = "123";

if(coruser == user.value){

if(corpass == pass.value){
window.alert("You had successfully logged in");
window.open("success.html");
}
else{
window.alert("You had entered incorrect password");
}
}
else{
window.alert("Incorrect username or password");
}
}


