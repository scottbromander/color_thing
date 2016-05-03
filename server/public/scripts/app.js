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
    for(var i = 0; i < colors.length; i++){
        var color = colors[i];
        $("#buttonContainer").append("<div class='color-button " + color + "'></div>");
        $("#buttonContainer").children().last().data("color", color);
    }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}