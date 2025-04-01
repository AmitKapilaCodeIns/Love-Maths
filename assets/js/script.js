// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function (e) {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked the submit button!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked a button of type: ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame() {
    // Generate two random numbers between 1 and 25
    const op1 = Math.floor(Math.random() * 25) + 1;
    const op2 = Math.floor(Math.random() * 25) + 1;
    const operator = Math.floor(Math.random() * 3);
    // 0 = addition, 1 = subtraction, 2 = multiplication
    switch (operator) {
        case 0:
            displayAdditionQuestion(op1, op2);
            break;
        case 1:
            displaySubtractQuestion(op1, op2);
            break;
        case 2:
            displayMultiplyQuestion(op1, op2);
            break;
        default:
            alert("Invalid operator");
    }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
