const path = require("path");
const fs = require("fs");

function getFiles(root, files) {
    const dirs = fs.readdirSync(root);
    dirs.forEach(dir => {
        const fullPath = path.join(root, dir);
        const sta = fs.statSync(fullPath);
        if(sta.isFile()){
            return files.push(fullPath);
        }
        getFiles(fullPath, files);
    });

    return files;
}

const files = [];
getFiles(__dirname, files);
console.log(files);

