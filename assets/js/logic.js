// variables to keep track of quiz state
// currentQuestion
var seconds = 60
// timerId

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startScreenEl = document.getElementById('start-screen');
var endScreenEl = document.getElementById('end-screen');


/* FUNCTION TO START THE QUIZ */
function startQuiz() {
    console.log('start button clicked');
    // hides start screen and unhides questions screen
    startScreenEl.classList.add('hide');
    questionsEl.classList.remove('hide');

    clockTick();
    getQuestion();
}

/* FUNCTION TO GET/SHOW EACH QUESTION */
function getQuestions() {
    // get current question object from array

    // update title with current question

    // clear out ant old question choices

    // loop over choices
    // FOR {
    // create new button for each choice

    // display on the page

    // }
}

/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {

    // if the clicked element is not a choice button, do nothing.
    if (something) {

    }

    // check if user guessed wrong
    if (something) {
        // penalize time

        // display new time on page

        // give them feedback, letting them know it's wrong
    } else {
        // give them feedback, letting them know it's right
    }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question    
}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section
}

/* FUNCTION FOR UPDATING THE TIME */
function clockTick() {
    var counter = document.getElementById("timer");
    seconds--;
    counter.innerHTML =
        (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
        setTimeout(clockTick, 1000);
    } else {
        counter.innerHTML = "010";
        questionsEl.classList.add('hide');
        endScreenEl.classList.remove('hide');
        document.getElementById('final-score').innerHTML = counter.innerHTML
    }
}

function saveHighscore() {
    console.log('submit button clicked')
    // get value of input box - for initials

    // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to local storage

    // redirect to next page
}

/* CLICK EVENTS */
document.getElementById('submit-button').addEventListener('click', saveHighscore)
document.getElementById('start-button').addEventListener('click', startQuiz)
    // user clicks on element containing choices