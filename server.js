// Define admin credentials
const adminCredentials = {
    username: 'admin',
    password: 'adminpassword'
};

// Import admin credentials
const adminCredentials = require('./adminCredentials');

// Admin login endpoint
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password match admin credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // If credentials are valid, generate and send admin token
        const token = jwt.sign({ admin: username }, 'secretkey');
        res.json({ success: true, token });
    } else {
        // If credentials are invalid, send error response
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});