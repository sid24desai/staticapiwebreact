// api.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/redirect-url', (req, res) => {
  res.json({ url: 'https://www.google.com' });
});

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
