var colors = ["rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)"]

// Select all display squares
var squares = document.querySelectorAll(".square");
// Assign the game winning color
var pickedColor = colors[3];
// select the span in the title
var colorDisplay = document.getElementById("colorDisplay");
// select the message ID
var messageDisplay =document.querySelector("#message");

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