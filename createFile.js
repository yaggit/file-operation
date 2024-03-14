const fs = require('fs');
const allTrack = require('./trackList')
const express = require('express');
const app = express();


let trackFilter = allTrack.track.find(i=>i.id == 2);
let abc = JSON.stringify(trackFilter)

function createFile(filepath, abc) {
   
    fs.writeFileSync(filepath, abc)
    };    
    
module.exports = { createFile, abc }
