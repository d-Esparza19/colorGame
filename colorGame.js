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
            alert("correct");
        }else{
            alert("Wrong");
        }
    });
}

