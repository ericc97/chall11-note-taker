const express = require('express')
const fs = require('fs');


const path = require('path');
const app = express()

const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT || 5000;
const { resourceLimits } = require('worker_threads');
//require middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/api/notes', (req,res) => {
  fs.readFile('./db/notes.json', 'utf-8', (err,data) => {
    const notes = JSON.parse(data)
    console.log(notes);
    res.json({notes})
  })
});

app.post('/api/notes', (req,res) => {
  const newNote = req.body

  fs.readFile('./db/notes.json', 'utf-8', (err,data) => {
    const notesArray = JSON.parse(data)
    const newId = uuidv4()
    newNote.id = newId
    notesArray.push(newNote)
    fs.writeFile('./db/notes.json', JSON.stringify(notesArray), (err) => {
      if (err) {
        console.error(err)
      }
      res.json({ success: true, newNote })
    })
  })
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req,res) => {
  //  res.json({notes}) 
  res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// request -> middleware function -> response

// server side rendered application

// react -> client side rendered