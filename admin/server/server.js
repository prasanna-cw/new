// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/reports', (req, res) => {
  // Simulated database query, replace this with your actual database query
  const databaseData = {
    customers: 1500,
    purchases: 300,
    sales: 10000,
    profit: 5000,
  };

  res.json(databaseData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 