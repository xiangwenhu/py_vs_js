arr = ["1", 2, "1", "3"];

# 尾部增加
arr.append(10000);
print(arr); # ['1', 2, '1', '3', 10000]

# 头部增加
arr.insert(0, -10000);
print(arr); # [-10000, '1', 2, '1', '3', 10000]

# 查找值的位置
index = arr.index(10000);
print("index", index) # index 5

# 修改
arr[2] = 3;
print(arr); # [-10000, '1', 3, '1', '3', 10000]

# 删除
arr.remove("1") 
print(arr); # [-10000, 3, '1', '3', 10000]

# 删除
arr.remove("1") 
print(arr); # [-10000, 3, '3', 10000]

