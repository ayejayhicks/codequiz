//question click function
//3rd part stop timer, showing end screen, show final score, end screen (picture). create 2 variables

var time = questions.length * 10;

//Variables
var questionsEl = document.createElement("questions");
var timerEl = document.createElement("time");
var choices = document.createElement("choices")
var submitEl = document.createElement("submit")
var startBtn = document.createElement("start");
var intialsEl = document.createElement("initials")


// Start Quiz
function startQuiz = document.getElementById("start-quiz");

function submitBtn() {

}

}    

}

//Timer
function countdown() {
    var timeLeft = 15;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

        console.log(timeLeft);
        if (timeLeft === 1) {
            timerEl.innerHTML = (timeLeft--) + " second left";
            console.log("IF == 1");
                }
        else if (timeLeft > 0) {
            timerEl.innerHTML = (timeLeft--) + " seconds left";
            console.log("IF > 0");
        }
        else {
            timerEl.innerHTML = "";
            clearInterval(timeInterval);
            console.log("IF ELSE");
            displayMessage();
        }




function displayTimer() {
    console.log("Hello")
}

// Click events

