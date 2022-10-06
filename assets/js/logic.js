// variables to keep track of quiz state
let shuffledQuestions, currentQuestionIndex;
var seconds = 60
// timerId

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startScreenEl = document.getElementById('start-screen');
var endScreenEl = document.getElementById('end-screen');
var questionTitleEl = document.getElementById('question-title');
var answerButtonsEl = document.getElementById('choices');
var feedbackEl = document.getElementById('feedback');
var counter = document.getElementById("timer");


/* FUNCTION TO START THE QUIZ */
function startQuiz() {
    console.log('start button clicked');
    // hides start screen and unhides questions screen
    startScreenEl.classList.add('hide');
    questionsEl.classList.remove('hide');

    // randomizes questions and displays first question in randomized array
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    clockTick();
    getQuestions();
}

/* FUNCTION TO GET/SHOW EACH QUESTION */
function getQuestions() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(questions) {
    console.log('currentQuestionIndex: ' + currentQuestionIndex)
    if (currentQuestionIndex > 3) {
        endScreenEl.classList.add('stop-time')
        questionsEl.classList.add('hide');
        endScreenEl.classList.remove('hide');
        document.getElementById('final-score').innerHTML = counter.innerHTML
    }
    questionTitleEl.innerText = questions.title;
    questions.choices.forEach(choice => {
        const button = document.createElement('button')
        button.innerText = choice.text
        button.classList.add('button-style', 'answer-button')
        if (choice.correct) {
            button.dataset.correct = choice.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    currentQuestionIndex++
    getQuestions()
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        feedbackEl.classList.remove('hide')
        feedbackEl.innerHTML = 'Correct'
    } else {
        seconds--
        feedbackEl.classList.remove('hide')
        feedbackEl.innerHTML = 'Wrong'
    }
}

function clearStatusClass() {

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

/* FUNCTION FOR UPDATING THE TIME */
function clockTick() {
    seconds--;
    counter.innerHTML =
        (seconds < 10 ? "0" : "") + String(seconds);
    if (endScreenEl.classList.contains('stop-time')) {
        counter.innerHTML = document.getElementById('final-score').innerHTML
    } else if (seconds > 0) {
        setTimeout(clockTick, 1000);

    } else {
        counter.innerHTML = '00'
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