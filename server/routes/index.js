const express = require('express');
const app = express();
const port = 12000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/client/build/index.html'));
});
