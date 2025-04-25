const display = document.getElementById('display');
let currentInput = '';
let firstNumber = null;
let operator = null;
let historyList = [];


const buttons = document.querySelectorAll('button');
//button logic 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value)) {
            // if the button is a number (0-9)
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            // if an operator button is clicked
            firstNumber = parseFloat(currentInput);
            operator = value;
            currentInput = '';
        } else if (value === '=') {
            // calculate when equals is pressed
            const secondNumber = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    result = firstNumber / secondNumber;
                    break;
            }
            //save my calculations
            historyList.push(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

            display.textContent = result;
            currentInput = result.toString();
        } else if (value === 'C') {
            // clear it all! 
            currentInput = '';
            firstNumber = null;
            operator = null;
            display.textContent = '0';
        }
    });
});

const historyBtn = document.getElementById('history-btn');
const historyDiv = document.getElementById('history');

historyBtn.addEventListener('click', () => {
    if (historyList.length === 0) {
        historyDiv.textContent = "No history yet.";
    } else {
        historyDiv.innerHTML = historyList.map(entry => `<div>${entry}</div>`).join('');
    }
});