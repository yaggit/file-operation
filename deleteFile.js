const fs = require('fs');

function deleteFile(filepath) {
    fs.unlinkSync(filepath)
    };

module.exports = { deleteFile };
