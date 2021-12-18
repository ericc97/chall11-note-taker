const express = require('express')
const path = require('path');
const app = express()
const port = 3000
// request

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// request -> middleware function -> response

// server side rendered application

// react -> client side rendered