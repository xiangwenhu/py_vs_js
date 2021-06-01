
function padNum(num, length = 2, ch = "0") {
    return `${num}`.padStart(length, ch);
}

function formatDate(date) {
    const d = new Date(date);
    const fullYear = d.getFullYear();
    const month = padNum(d.getMonth() + 1)
    const day = padNum(d.getDate())
    const h = padNum(d.getHours())
    const m = padNum(d.getMinutes())
    const s = padNum(d.getSeconds())

    return `${fullYear}-${month}-${day} ${h}:${m}:${s}`
}

console.log(formatDate(new Date(2020, 0, 1, 1, 1, 1)));

