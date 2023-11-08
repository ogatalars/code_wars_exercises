// Your task is to create a function that does four basic mathematical operations.

// // The function should take three arguments - operation(string/char), value1(number), value2(number).
// // The function should return result of numbers after applying the chosen operation.

function basicOp(operation: string, value1: number, value2: number): number {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return value1 / value2;
        default:
            throw new Error("Invalid operation. Please use one of '+', '-', '*', or '/'");
    }
}

console.log(basicOp('+', 4, 7)) // Output: 11
