const express = require('express');

const app = express();

app.use('./', (req,res) => {
    res.send('This is my first test')
});


const PORT = process.env.PORT||3001;

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);