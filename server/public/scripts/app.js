var colors = ["red", "blue", "yellow", "green"];
var currentColor;

$(document).ready(function(){
    console.log("works");
    createButtons();
    changeColor();
    $("#buttonContainer").on("click", ".color-button", clickButton);
    $("#guess").text(" ");
});

function changeColor() {
    currentColor = colors[randomNumber(0, colors.length - 1)];
    $("#colorPrompt").text(currentColor);
}

function clickButton(){
    if($(this).data("color") === currentColor){
        $("#guess").text("success!");
    } else {
        $("#guess").text("nope!");
    }
    changeColor();
}

function createButtons(){
    $("#buttonContainer").append("<div class='color-button red'></div>");
    $("#buttonContainer").children().last().data("color", "red");
    $("#buttonContainer").append("<div class='color-button green'></div>");
    $("#buttonContainer").children().last().data("color", "green");
    $("#buttonContainer").append("<div class='color-button yellow'></div>");
    $("#buttonContainer").children().last().data("color", "yellow");
    $("#buttonContainer").append("<div class='color-button blue'></div>");
    $("#buttonContainer").children().last().data("color", "blue");
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}