const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST request to store user data
app.post('/register', (req, res) => {
  const userData = req.body;

  // Read existing users data from local storage
  let users = [];
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    users = JSON.parse(data);
  } catch (err) {
    console.error('Error reading users data:', err);
  }

  // Add new user data
  users.push(userData);

  // Save updated users data to local storage
  fs.writeFileSync('users.json', JSON.stringify(users));

  res.send('User data stored successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
