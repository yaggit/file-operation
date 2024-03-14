const fs = require('fs');
const allTrack = require('./trackList')

let yearrid = 2004; 
  
let allTrack1 = allTrack.track.filter(song => song.year == yearrid);

let years = JSON.stringify(allTrack1)

function createYearFile(filepath, years) {
   
    fs.writeFileSync(filepath, years)
    };    
    
module.exports = { createYearFile, years }
