const fs = require('fs');
const allTracks = require('./trackList') 


let trackFilter = allTracks.track.find(i => i.id == 2);
let xyz = JSON.stringify(trackFilter)
function appendFile(filepath, xyz) {
    fs.appendFileSync(filepath, xyz)
};

module.exports = { appendFile,xyz };
