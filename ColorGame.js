var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var sqaures = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

//select buttoms
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var proBtn = document.getElementById("proBtn");
var modeBtns = document.querySelectorAll(".mode");

reset();

for (let i = 0; i < modeBtns.length; i++) {

    modeBtns[i].addEventListener("click", function () {
        //first remove all selected
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy") {
            //alert("debug");
            numberOfSquares = 3;
        } else if (this.textContent === "Hard") {
            numberOfSquares = 6;
        } else { //pro level
            numberOfSquares = 9;
        }
        reset();

    });
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "Change Colors";

    for (var i = 0; i < sqaures.length; i++) {
        if (colors[i]) {
            sqaures[i].style.display="block";
            sqaures[i].style.backgroundColor = colors[i];
        } else {
            sqaures[i].style.display = "none";
        }
    }

   
}


resetButton.addEventListener("click", function () {
    reset();
});

colorDisplay.textContent = pickedColor;


for (let i = 0; i < sqaures.length; i++) {
    sqaures[i].style.backgroundColor = colors[i];

    //add click listeners 
    sqaures[i].addEventListener("click", function () {
        var clickColor = this.style.backgroundColor;
        console.log(clickColor, pickedColor);
        if (clickColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color) {
    //when winning sqaure is picked all sqaures change color to that color
    for (var i = 0; i < colors.length; i++) {
        sqaures[i].style.backgroundColor = color;
    }
}

//chosen color is ...
function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


//generate array of colors to the game
function generateRandomColors(numOfColors) {

    var colorsArr = [];

    for (let i = 0; i < numOfColors; i++) {
        colorsArr.push(randomColor());
    };

    return colorsArr;
}

//generate specific color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}