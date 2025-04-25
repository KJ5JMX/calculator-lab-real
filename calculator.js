

//calculation history stuff
const history = [];


//found switch for my (if else) string to loop through the operations. 
function processOPerations(ops) {
    for (let i = 0; i < ops.length; i++) {
        const {a, b, operator } = ops[i]
        let result;

        switch (operator) {
            case '+':
                result = add(a, b);
                break;
            case '-' :
                result = subtract(a, b);
                break;
            case '*':
                result = multiply(a, b);
                break;
            case '/':
                result = divide(a, b);
                break;
            default:
                result = 'Invalid operator';
        }

        const logEntry = `${a} ${operator} ${b} = ${result}`;
        
    }
}
//push into my array
function logCalculation(a, b, operator, result) {
    const entry = `${a} ${operator} ${b} =${result}`;
    history.push(entry)
}

//history of calculations (if any)
function displayHistory() {
    if (history.length ===0) {
        console.log("No calculations have been stored yet");
    } else {
        console.log("calculation history:");
        history.forEach(entry => console.log(entry));
    }
}

//clearing history
function clearHistory() {
    history.length = 0;
    console.log("no more history")
}


//add function
function add (a, b) {
    const result = a + b;
    logCalculation(a, b, '+', result);
    return a + b;
}
console.log(add(44,66));

//subtract function
function subtract (a, b) {
    const result = a - b;
    logCalculation(a, b, '-', result);
    return a - b;
}
console.log(subtract(37,81))

//multiply function with 0
function multiply (a, b) {
    const result = a * b;
    logCalculation(a, b, '*', result);
    return a * b;
}
console.log(multiply(16,85))

//divide function
function divide (a, b) {
    if (b === 0) {
        const error = "No No No.";
        logCalculation(a, b, '/', error);
        return error;
      }
      const result = a / b;
      logCalculation(a, b, '/', result);
    return a / b
}
console.log(divide(49,76))


//what are the opterations 
const operations = [
    { a: 2, b: 3, operator: '+' },
    { a: 10, b: 5, operator: '-' },
    { a: 10, b: 5, operator: '*' },
    { a: 10, b: 5, operator: '/' },
    { a: 10, b: 0, operator: '/' } // 0
];




const userCommand = process.argv[2];

if (userCommand ==='history') {
    displayHistory();
} else if (userCommand === "clear") {   
    clearHistory();
} else {
    processOPerations(operations);
    console.log("Completed - run node calculator.js history to view")
}

//reallllllllly want to make a web page with an old school calulator look to have this run in. 