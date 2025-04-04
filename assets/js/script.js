// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function (e) {
            if (this.getAttribute("data-type") === "submit") {
                //alert("You clicked the submit button!");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You clicked a button of type: ${gameType}`);
                runGame(gameType);
            }
        });
    }
    document
        .getElementById("answer-box")
        .addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                checkAnswer();
            }
        });
    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
    // Clear the answer box
    document.getElementById("answer-box").value = "";
    // Generate two random numbers between 1 and 25
    const op1 = Math.floor(Math.random() * 25) + 1;
    const op2 = Math.floor(Math.random() * 25) + 1;

    switch (gameType) {
        case "addition":
            displayAdditionQuestion(op1, op2);
            break;
        case "subtract":
            displaySubtractQuestion(op1, op2);
            break;
        case "multiply":
            displayMultiplyQuestion(op1, op2);
            break;
        case "division":
            displayDivisionQuestion(op1, op2);
            break;
        default:
            alert(`Invalid game type: ${gameType}`);
            throw `Invalid game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(
            `Awwww....you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`
        );
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and the operator from the DOM
 * and returns the correct answer.
 */
function calculateCorrectAnswer() {
    const operand1 = parseInt(document.getElementById("operand1").innerText);
    const operand2 = parseInt(document.getElementById("operand2").innerText);
    const operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "÷") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let incorrectScore = parseInt(
        document.getElementById("incorrect").innerText
    );
    document.getElementById("incorrect").innerText = ++incorrectScore;
}

// https://www.youtube.com/watch?v=BVBtbYh3YSU textContent VS innerText
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent =
        operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent =
        operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    // Ensure operand1 is a multiple of operand2 for a clean division
    document.getElementById("operand1").textContent = operand1 * operand2;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "÷";
}
