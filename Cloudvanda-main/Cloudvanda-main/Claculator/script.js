let currentInput = "";
let operator = "";
let firstOperand = "";

function clearResult() {
    document.getElementById("result").value = "";
    currentInput = "";
    operator = "";
    firstOperand = "";
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput !== "") {
        operator = op;
        firstOperand = currentInput;
        currentInput = "";
    }
}

function calculateResult() {
    if (currentInput !== "") {
        let secondOperand = currentInput;
        let result = 0;

        switch (operator) {
            case "+":
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case "-":
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case "*":
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case "/":
                if (parseFloat(secondOperand) !== 0) {
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                } else {
                    alert("Division by zero is not allowed.");
                    clearResult();
                    return;
                }
                break;
        }

        document.getElementById("result").value = result;
        currentInput = result.toString();
    }
    operator = "";
    firstOperand = "";
}

function updateDisplay() {
    document.getElementById("result").value = currentInput;
}

// Add event listeners to number buttons
for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function() {
        appendNumber(i);
    });
}

// Add event listeners to operator buttons
document.getElementById("add").addEventListener("click", function() {
    appendOperator("+");
});

document.getElementById("subtract").addEventListener("click", function() {
    appendOperator("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    appendOperator("*");
});

document.getElementById("divide").addEventListener("click", function() {
    appendOperator("/");
});


document.getElementById("decimal").addEventListener("click", function() {
    appendDecimal();
});


document.getElementById("equals").addEventListener("click", function() {
    calculateResult();
});


document.getElementById("clear").addEventListener("click", function() {
    clearResult();
});
