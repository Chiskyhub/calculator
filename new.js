document.getElementById('divideBtn').addEventListener('click', function() {
    calculate('divide');
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    calculate('multiply');
});

function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Please enter valid numbers.';
        return;
    }

    switch (operation) {
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
                resultElement.innerHTML = 'Result: ' + result;
            } else {
                resultElement.innerHTML = 'Cannot divide by zero.';
            }
            break;

        case 'multiply':
            result = num1 * num2;
            resultElement.innerHTML = 'Result: ' + result;
            break;

        default:
            resultElement.innerHTML = 'Invalid operation.';
            break;
    }
}
