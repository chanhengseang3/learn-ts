console.log('hello')

var n1: number = 0;
var n2: number = 1;

function fibonacci(n: number): number {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log('fibonacci of 10 is:'+fibonacci(10));
console.log('fibonacci of 20 is:'+fibonacci(20));