const print = console.log;


function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// 0-1之间随机数
print(Math.random())

// 1-10之间随机整数
print(randInt(1, 10))

// 0-1000之间 随机偶数
let num = randInt(0, 1000);
num = num % 2 === 0? num : num -1;
print(num)

// // 随机浮点数
print(rand(0.1, 3.6))

// 权重相等，选择3个
// 难搞。。。。。 