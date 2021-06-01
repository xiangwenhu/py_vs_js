const fs = require("fs");

const print = console.log;
try {

    throw new TypeError("无效的类型")
    fs.openSync("../sdasdas/x.ts")

} catch (err) {
    if (err instanceof TypeError) {
        print("type error", err)
    } else if (err instanceof Error) {
        print("common error", err)
    }
}

