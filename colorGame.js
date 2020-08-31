// Select all display squares
var squares = document.querySelectorAll(".square");
//difficulty selector
var numSquares = 6;
// Generate the colors
var colors = generateRandomColors(numSquares);
// Assign the game winning color
var pickedColor = pickColor();
// select the span in the title
var colorDisplay = document.getElementById("colorDisplay");
// select the message ID
var messageDisplay =document.querySelector("#message");
//Select the header for victory color
var h1 = document.querySelector("h1");
// select reset button
var resetButton = document.querySelector("#reset");
//select difficulty buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for(var i=0; i < squares.length; i++){

            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a color
    pickedColor = pickColor();
    //change display
    colorDisplay.textContent = pickedColor;
    // fix display colors on squares
    for( var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    //reset victory / try again text
    messageDisplay.textContent = "";
    // Change try again / new game button
    this.textContent = "New Colors";
})

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
            resetButton.textContent = "Play Again?";
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

function pickColor(){
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