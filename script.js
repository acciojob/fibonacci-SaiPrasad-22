const express = require('express');
const app = express();

// Function to calculate Fibonacci number
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 0;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i < n; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }

    return curr;
}