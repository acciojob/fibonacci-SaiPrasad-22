const express = require('express');
const app = express();

// Function to calculate Fibonacci number
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let prev = 0;
    let curr = 1;
    let result = 0;

    for (let i = 2; i < n; i++) {
        result = prev + curr;
        prev = curr;
        curr = result;
    }

    return result;
}

// Route to handle Fibonacci requests
app.post('/fibnocci', (req, res) => {
    const n = req.body.n;
    const fibNumber = fibonacci(n);
    res.json({ message: fibNumber });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
