const print = console.log
const arr = ["1", 2, "1", "3"];

// 尾部增加
arr.push(10000);
print(arr); // [ '1', 2, '1', '3', 10000 ]

// 头部增加
arr.unshift(-10000)
print(arr);  // [ -10000, '1', 2, '1', '3', 10000 ]

// 查找值的位置
let index = arr.indexOf(10000)
print("index", index) // index 5

// 修改
arr[2] = 3;
print(arr); // [ -10000, '1', 3, '1', '3', 10000 ]

// 删除
index = arr.indexOf("1");
arr.splice(index, 1) 
print(arr); // [ -10000, 3, '1', '3', 10000 ]

// 删除
index = arr.indexOf("1");
arr.splice(index, 1) 
print(arr); // [ -10000, 3, '3', 10000 ]
