// Function to append numbers and operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        // Evaluate the expression and display the result
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        // In case of an error (e.g., invalid expression), show an error message
        document.getElementById('display').value = 'Error present';
    }
}
