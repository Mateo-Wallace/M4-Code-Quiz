function printHighscores() {
    // either get scores from localstorage or set to empty array

    // sort highscores by score property in descending order

    // loop through scores
    // create li tag for each high score

    // display on page
}

/* FUNCTION TO CLEAR SCORES */
function clearHighscores() {
    console.log('clear button clicked')
    // remove an item from local storage
    // reload the page
}

document.getElementById('clear').addEventListener('click', clearHighscores)
printHighscores();