const https = require('https');
const fs = require("fs");
const path = require("path");

https.get('https://www.baidu.com', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        console.log("data", data);
        fs.writeFileSync(path.join(__dirname, "./_js_baidu.html"), data);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});