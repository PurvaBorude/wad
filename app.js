const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the main directory
app.use(express.static(__dirname));

// Route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
