import random

# 0-1随机数
print(random.random())

# 1-10随机整数
print(random.randint(1, 10))

# 随机偶数
print(random.randrange(0, 1000, 2))

# 随机浮点数
print(random.uniform(0.1, 3.6))

# 权重相等，选择3个
print(random.choices([1, 2, 3, 4, 5], [1, 1, 1, 1, 1], cum_weights=None, k=3))
