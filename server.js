const express = require('express')
const fs = require('fs');


const path = require('path');
const app = express()
const port = 3000
const notes = require('./Develop/db/notes.json')

//require middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/api/notes', (req,res) => {
   res.json({notes}) 
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// request -> middleware function -> response

// server side rendered application

// react -> client side rendered