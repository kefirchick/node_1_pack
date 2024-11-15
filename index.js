console.log('Hello user! Current version: 1.1.0');

function calculate(input) {
    if (typeof input != 'string') {
        throw new TypeError('Input should be a string');
    }

    const tokens = input.split(/\s+/);
    const stack = [];

    tokens.forEach((token) => {
        if (isNumber(token)) {
            stack.push(Number(token));
        } else if (isOperator(token)) {
            const operation = getOperation(token);
            const result = operation(stack.pop(), stack.pop());
            stack.push(result);
        } else {
            throw new TypeError('Token should be an integer number or operator +, - or *');
        }
    });

    if (stack.length != 1) {
        throw new Error('Calculation Error');
    }

    return stack[0];
}

function isNumber(token) {
    return Number.isInteger(Number(token));
}

function isOperator(token) {
    return '+-*'.includes(token);
}

function getOperation(token) {
    switch (token) {
        case '+': return (a, b) => b + a;
        case '-': return (a, b) => b - a;
        case '*': return (a, b) => b * a;
    }
}

module.exports = calculate;