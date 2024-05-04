var msg1, msg2, msg3;
var answer = Math.floor(Math.random() * 10) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function startGame() {
    no_of_guesses = 0;
    answer = Math.floor(Math.random() * 10) + 1;
    guessed_nums = [];
    document.getElementById("text1").textContent = "";
    document.getElementById("text3").textContent = "";
    document.getElementById("text2").textContent = "";
    document.getElementById("guess").value = "";
}

function play() {
    var user_guess = parseInt(document.getElementById("guess").value);

    if (user_guess < 1 || user_guess > 10 || isNaN(user_guess)) {
        alert("Please enter a number between 1 and 10.");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses++;

        if (user_guess < answer) {
            msg1.textContent = "Your Guess is too Low";
        } else if (user_guess > answer) {
            msg1.textContent = "Your Guess is too High";
        } else {
            msg1.textContent = "Congratulations! You guessed the correct number.";
            document.getElementById("my_btn").disabled = true;
        }

        msg2.textContent = "No. of Guesses: " + no_of_guesses;
        msg3.textContent = "Guessed Numbers are: " + guessed_nums.join(", ");
    }
}

function playAgain() {
    startGame();
    document.getElementById("my_btn").disabled = false;
}

window.onload = startGame;
