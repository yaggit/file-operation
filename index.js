const http = require('http');
const fs = require('fs');
const allTracks = require('./trackList.js')

const express = require('express');
const app = express();
const port = 2024
const { createFile, abc } = require('./createFile.js');
const { deleteFile } = require('./deleteFile.js');
const { appendFile, xyz } = require('./appendFile.js');
const { createYearFile, years } = require('./year.js')

app.get('/', (req, res) => {
    res.send(`<h1>this is home for file operations</h1><br> /create <br> /append <br> /delete <br> /year`)
});

app.get('/create', (req, res) => {
    let reqparam = req.query.id;
    fs.writeFileSync('./logs.txt', `${req.url} \n`)
    createFile('./createFile.json', `${abc} \n`);
    res.send(abc)
    console.log(abc)
})

app.get('/year', (req, res) => {
    console.log(req.path)
    fs.appendFileSync('./logs.txt', `${req.url} \n`)
    createFile('./YearFile.json', `${years} \n`);
    res.send(years)
})

app.get('/append', (req, res) => {
    console.log(req.path)
    fs.appendFileSync('./logs.txt', `${req.url} \n`)
    appendFile('./createFile.json', `${xyz} \n`);
    res.send(xyz)
})

app.get('/delete', (req, res) => {
    console.log(req.path)
    fs.unlinkSync('./createFile.json');
    res.send('file deleted')
})

// app.get('/id', function(req, res){
//     res.send('id: ' + req.query.id);
//   });

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
});

