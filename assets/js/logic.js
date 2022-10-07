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
    // hides start screen and unhides questions screen
    startScreenEl.classList.add('hide');
    questionsEl.classList.remove('hide');

    // randomizes questions and creates a randomized array
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
    if (currentQuestionIndex > 3) {
        endScreenEl.classList.add('stop-time')
        questionsEl.classList.add('hide');
        endScreenEl.classList.remove('hide');
        document.getElementById('final-score').innerHTML = counter.innerHTML
    }
    questionTitleEl.innerText = questions.title;
    questions.choices.forEach(choices => {
        const button = document.createElement('button')
        button.innerText = choices.text
        button.classList.add('button-style', 'answer-button')
        if (choices.correct === true) {
            button.classList.add('correct')
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

// removes last questions buttons
function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

// shows review div, and takes away time if incorrect answer
function selectAnswer(e) {
    const selectedButton = e.target
    if (selectedButton.classList.contains('correct')) {
        feedbackEl.classList.remove('hide')
        feedbackEl.innerHTML = 'Correct'
        setTimeout(function () {
            feedbackEl.innerHTML = '';
        }, 1000);
    } else {
        seconds -= 10
        feedbackEl.classList.remove('hide')
        feedbackEl.innerHTML = 'Wrong'
        setTimeout(function () {
            feedbackEl.innerHTML = '';
        }, 1000);
    }
    currentQuestionIndex++
    getQuestions()
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

// saves relevant values, add to json local storage, nav to highscores page
function saveHighscore() {
    var initials = document.getElementById('initials').value;
    var finalScore = counter.innerHTML
    if (initials == '') {
        alert('Please input at least 1 character')
        return null
    }
    var currentScore = { init: initials, score: finalScore };
    var savedScores = JSON.parse(localStorage.getItem("savedScores"));
    if (savedScores !== null) {
        savedScores.push(currentScore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
    } else {
        savedScores = [currentScore];
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
    }

    window.location.href = "./highscores.html";
}

/* CLICK EVENTS */
document.getElementById('submit-button').addEventListener('click', saveHighscore)
document.getElementById('start-button').addEventListener('click', startQuiz)