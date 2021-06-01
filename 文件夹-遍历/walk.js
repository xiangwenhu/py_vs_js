const path = require("path");
const fs = require("fs");

function walk(root) {
    const dirs = fs.readdirSync(root);
    dirs.forEach(dir => {
        const fullPath = path.join(root, dir);
        const sta = fs.statSync(fullPath);
        if(sta.isFile()){
            return console.log(fullPath);
        }
        console.log(fullPath);
        walk(fullPath);
    });
}

walk(__dirname);

