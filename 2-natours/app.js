const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('GET request');
  res.status(200).send('Hello from server side');
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`App running on ${PORT}...`);
});
