function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to calculate the result of the expression
function calculateResult() {
    let displayValue = document.getElementById("display").value;

    try {
        // Evaluate the expression
        let result = eval(displayValue);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}