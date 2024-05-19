"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_function_1 = require("./my-function");
console.log('hello');
var n1 = 0;
var n2 = 1;
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log('fibonacci of 10 is:' + fibonacci(10));
console.log('fibonacci of 20 is:' + fibonacci(20));
var n3 = (0, my_function_1.add)(3, 5);
console.log('add value:' + n3);
