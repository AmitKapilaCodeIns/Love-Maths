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
                // alert(`You clicked a button of type: ${gameType}`);
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
    // Generate two random numbers between 1 and 25
    const op1 = Math.floor(Math.random() * 25) + 1;
    const op2 = Math.floor(Math.random() * 25) + 1;

    switch (gameType) {
        case "addition":
            displayAdditionQuestion(op1, op2);
            break;
        // case "subtract":
        //     displaySubtractQuestion(op1, op2);
        //     break;
        // case "multiply":
        //     displayMultiplyQuestion(op1, op2);
        //     break;
        // case "division":
        //     displayDivisionQuestion(op1, op2);
        //     break;
        default:
            alert(`Invalid game type: ${gameType}`);
            throw `Invalid game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {}

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
    } else if (operator === "*") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unrecognized operator: ${operator}`);
        throw `Unrecognized operator: ${operator}`;
    }
}

function incrementScore() {}

function incrementWrongAnswer() {}

// https://www.youtube.com/watch?v=BVBtbYh3YSU textContent VS innerText
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
