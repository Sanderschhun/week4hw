function check (){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

if (question1 == "stay-2-ft-away-from-people"){
  correct ++;
}
if (question2 == "knowledge"){
  correct ++;
}
if (question3 == "all-of-the-above"){
  correct ++;
}

var messages = ["Now I know your safe", "Should probably google some answers", "Please stay inside"];
var pictures = ["img/safe.gif", "img/research.gif", "img/stayhome.gif"];

var range;

  if (correct < 1) {
    range = 2;
  }

  if ( correct > 0 && correct < 3) {
    range = 1;
  }

  if (correct > 2) {
     range = 0;
  }
  document.getElementById("after_submit").style.visibility = "visible";
  
  document.getElementById("message").innerHTML = messages [range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];

}

var initials = document.querySelector("#initials");


function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    initials: initialsInput.value.trim(),
    
  };

  console.log(user);
  

  if (user.initials === "") {
    displayMessage("error", "First name cannot be blank");
  
  
    localStorage.setItem("user", JSON.stringify(user));
    
  
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userFirstNameSpan.textContent = lastUser.firstName;
    
  }
});

var statusSpan = document.querySelector("#status");
var playButton = document.querySelector("#play");
var minutesDisplay = document.querySelector("#minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

var status = "Working";

var secondsLeft = totalSeconds - secondsElapsed;

function setTime() {
  var minutes;

  if (status === "Working") {
    minutes = workMinutesInput.value.trim();
  } else {
    minutes = restMinutesInput.value.trim();
  }

  clearInterval(interval);
  totalSeconds = minutes * 60;
}
function startTimer() {
  setTime();


  if (totalSeconds > 0) {    
      interval = setInterval(function() {
        secondsElapsed++;
       
        renderTime();
      }, 1000);
  } 
}
