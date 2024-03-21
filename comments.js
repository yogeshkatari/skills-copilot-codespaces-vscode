// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Path: comments.js
// Import comments data
const comments = require('./comments.json');

// Path: comments.js
// Create a route for getting all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Path: comments.js
// Create a route for getting comments by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
    return;
  }
  res.json(comment);
});

// Path: comments.js
// Export the express app
module.exports = app;

// Path: index.js
// Import the express app from comments.js
const comments = require('./comments');

// Path: index.js
// Use the express app
app.use(comments);

// Path: index.js
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Path: package.json
{
  "name": "express-server",
  "version": "1.0.0",
  "description": "Create express server",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

// Path: package.json
{
  "name": "express-server",
  "version": "1.0.0",
  "description": "Create express server",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

// Path: comments.json
[
  {
    "id": 1,
    "content": "This is a comment."
  },
  {
    "id": 2,
    "content": "This is another comment."
  }
]

// Path: index.js
// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Path: index.js
// Create a route for the home page
app.get