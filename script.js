function myFunction(){
var anyInput = prompt("Enter Anything");
if(anyInput != ""){
    document.getElementById("p2").innerHTML = "You Entered: "+anyInput;
}
else{
    document.getElementById("p2").innerHTML = "Use prompt to read a value from user and display it in the span element."
}
}

function CordinateFn(event){
var x = event.clientX;
var y = event.clientY;
document.getElementById("thirdTask").innerHTML="X:"+x +" And " +"Y:"+y;
}



// Creating event listener for textarea

var textarea=document.getElementById("4Ttext");

function countChars(e){
    var textEntered = document.getElementById('4Ttext').value;
    var count = textEntered.length;
    document.getElementById("op").innerHTML=count;

}
textarea.addEventListener('input',countChars);

// input/ keyup / oninput 