const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'web')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'login.html'));
});

// Route for login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'login.html'));
});

// Route for registration page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'register.html'));
});

// Serve home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'home.html'));
});

// Serve home page
app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'post.html'));
});


// Handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Example: Check if email and password match a user in the database
    if (email === 'example@email.com' && password === 'password123') {
        res.status(200).json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// Handle registration form submission
app.post('/register', (req, res) => {
    // Handle registration logic here
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
