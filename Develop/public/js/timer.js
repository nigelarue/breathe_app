var myInterval;
var minutes = 0;
var active = false;
var timer = 0;
var rounds = 0;

function timeToRelax(){
  if(active){
    rounds++;
    $("#rounds").html("Set "+rounds);
  $("#breath").html("Breath In Deeply");
  $(".relax").addClass("breathIn");
  setTimeout(function(){
    if(active){
     $("#breath").html("Hold");
    }
  }, 5000);
  setTimeout(function(){ if(active){
     $("#breath").html("Breath Out Fully");
    $(".relax").removeClass("breathIn");
    setTimeout(function(){
      if(active){
       $("#breath").html("Hold empty breath");
      }
    },5000);
    setTimeout(function(){
      timeToRelax();
    }, 10000);
  }
  }, 10000);
  }  
}

function updateClock(){
  timer++;
  if(timer % 60 == 0){
    timer = 0;
    minutes++;
  }
  if(minutes < 9 && timer < 10){
  $("#timer").html("0"+minutes+":"+"0"+timer);
  }else if(minutes < 9){
    $("#timer").html("0"+minutes+":"+timer);
  }else{
    $("#timer").html(minutes+":"+timer);
  }
}

function endSession(){
  clearInterval(myInterval);
      timer = 0;
      minutes = 0;
      rounds = 0;
      $("#timer").html(timer);
      active=false;
  $("#rounds").html(rounds);
      $("#start").addClass("btn-info");
     $("#start").removeClass("btn-warning");
      $("#start").text("Begin Session");
       $("#breath").html("");
    $(".relax").removeClass("breathIn");
}

function startSession(){
   active = true;
     $("#start").removeClass("btn-info");
     $("#start").addClass("btn-warning");
     $("#start").text("Stop Session");
     myInterval = setInterval(function(){
       updateClock();
     }, 1000);
      timeToRelax();  
}
function checkStatus(){
   if(!active){
     startSession();  
    }else{
      endSession();
    }  
}

function scrollme(){
  $('html, body').animate({
    scrollTop: ($("#breathImg").offset().top)
  }, 1000);
}



$(document).ready(function(){
  $("#start").click(function(){
    checkStatus();
  });
  $("#snapTo").on("click", function(){
    scrollme();
  });
});