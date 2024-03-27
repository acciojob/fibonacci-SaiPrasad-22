function fibonacci(num) {
// your code here
 if (num === 1) {
        return 0;
    } else {
        // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// module.exports = fibonacci;
