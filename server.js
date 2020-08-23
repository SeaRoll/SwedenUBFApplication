// Got from https://stackoverflow.com/questions/60846916/react-app-runs-locally-but-crashes-with-error-code-h10-on-heroku

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);