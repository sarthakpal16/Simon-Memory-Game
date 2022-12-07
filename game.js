
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour;
var gameStarted = false;
var level = -1;




if (!gameStarted) {
    $(document).keypress(function (event) {
        console.log(event.key);
        gameStarted = true;
        setTimeout(function(){   
            nextSequence();
        },500);
        
    });
}


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    setTimeout(function (){
        var randomNumber = Math.floor(Math.random() * 4);
        randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        buttonAnimation(randomChosenColour);
        console.log(gamePattern);
    },500);
    
    
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function (){
                nextSequence();

            },1000);
        }
    }

    else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");

        },200);
        $('h1').text("Game Over, Press Any Key to Restart");
        $(document).keypress(function (event) {  
            setTimeout(restart,2000);
              
        });
        
    }

}

function restart() {
    
    level = -1;
    gamePattern = []
    gameStarted = false;
    userClickedPattern = [];
    
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

    checkAnswer(userClickedPattern.length-1);
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





