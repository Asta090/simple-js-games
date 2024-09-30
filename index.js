var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedpattern=[];
var started=false;
var level=0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextSeq();
    started=true;
  }
});
$(".btn").click(function(){
  var userChosencolor=$(this).attr("id");
  userClickedpattern.push(userChosencolor);
  playseq(userChosencolor);
  animatePress(userChosencolor);
  checkans(userClickedpattern.length-1);
});
function checkans(currentLevel){
  if(gamePattern[currentLevel] === userClickedpattern[currentLevel]){
    console.log("sucess");
    if(userClickedpattern.length === gamePattern.length){
      setTimeout(function(){
        nextSeq();
      },1000);
    }
  }
  else {
    playseq("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
  }
function nextSeq(){
  userClickedpattern=[];
  level++;
  $("#level-title").text("Level " + level);
var randomChosenNum=Math.floor(Math.random()*4);
var randomChosenColor=buttonColours[randomChosenNum];
gamePattern.push(randomChosenColor);
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playseq(randomChosenColor);

}

function playseq(name){
  var audio=new Audio("sounds/" +name+ ".mp3");
audio.play();
}
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
  },100);
}
function startOver(){
  level=0;
  gamePattern = [];
  started = false;
}


