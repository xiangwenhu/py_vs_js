const print = console.log;

const arr = Array.from({
    length: 100
}, (v, i) => {
    return i + 1
});

print(arr);