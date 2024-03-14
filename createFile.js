const fs = require('fs');
const allTrack = require('./trackList')

let trackFilter = allTrack.track.find(i=>i.id == 1);
let abc = JSON.stringify(trackFilter)

function createFile(filepath, abc) {
   
    fs.writeFileSync(filepath, abc)
    };    
    
module.exports = { createFile, abc }
