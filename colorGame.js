var colors = generateRandomColors(6);

// Select all display squares
var squares = document.querySelectorAll(".square");
// Assign the game winning color
var pickedColor = pickedColor();
// select the span in the title
var colorDisplay = document.getElementById("colorDisplay");
// select the message ID
var messageDisplay =document.querySelector("#message");
//Select the header for victory color
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++){

    // add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add listeners to squares
    squares[i].addEventListener("click",function(){
        //obtain color
        var clickedColor = this.style.backgroundColor;
        //compare to winning color
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColors(color){
    //loop through squares
    for(var i = 0; i < squares.length; i++){
    //assign colors
        squares[i].style.backgroundColor = color;
    }
}

function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick r value, g value, b value
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}