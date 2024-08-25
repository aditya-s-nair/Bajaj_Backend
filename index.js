const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());
// POST /bfhl route
app.post('/bfhl', (req, res) => {
    // Replace with your actual full name and DOB
    const userId = "your_name_17091999";  // E.g., "john_doe_17091999"

    // Here, you can add logic to validate the request or handle the data
    // For simplicity, we're assuming success in this example.

    const response = {
        user_id: userId,
        is_success: true,
        // You can include additional fields here if needed
    };

    res.status(200).json(response);
});

// GET /bfhl route
app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };

    res.status(200).json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
