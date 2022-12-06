
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour;
var gameStarted = false;
var level = -1;

$(document).keypress(function (event) {
    console.log(event.key);
    
    setTimeout(function(){if (!gameStarted) {
        gameStarted = true;
        
        nextSequence();
    
    }},1000);
    
    
    
});


function nextSequence() {
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
    console.log(gamePattern);
    
}




function buttonAnimation (buttonColor) {
    playSound(buttonColor);
    
    $('#'+buttonColor).fadeOut(100).fadeIn(100);
    
}

// $('.btn').on("click",function(event){
//     var userChosenColour = event.currentTarget.id;
//     userClickedPattern.push(userChosenColour);
//     console.log(userClickedPattern);
// })

$('.btn').on("click",function(event){
    
    var userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userClickedPattern);
})

function playSound(name) {
    var colorAudio = new Audio("sounds/"+name+".mp3");
    colorAudio.play();
}

function animatePress(currentColor) {
    $('#'+currentColor).addClass('pressed');

    setTimeout(function () {
        $('#'+currentColor).removeClass('pressed');
    
        },100);
}





