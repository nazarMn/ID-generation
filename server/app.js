const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const uuid = require('uuid').v4;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.id = uuid();
  next();
});

app.use((req, res, next) => {
  console.log(`Request ID: ${req.id}`);
  next();
});


app.get('/generate-id', (req, res) => {
  res.json({ id: req.id });
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
