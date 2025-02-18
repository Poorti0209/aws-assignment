const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., for images, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next(); // Pass control to the next middleware
});

// Home route (Main e-commerce page)
app.get('/', (req, res) => {
  console.log('Serving the home page');
  res.send(`
    <html>
      <head><title>My E-Commerce Site</title></head>
      <body>
        <h1>Welcome to the E-Commerce Store</h1>
        <h2>Featured Products</h2>
        <ul>
          <li>Product 1 - $10</li>
          <li>Product 2 - $20</li>
          <li>Product 3 - $30</li>
        </ul>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
