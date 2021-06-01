obj = {
    "name": "Tom",
    "age": 10,
    "weight": 60,
    "height": 100
}

obj["name"] = "Tom +"
obj["age"] = 100


print(obj)
print("keys:", obj.keys())

print()
print("----------------------")
for k in obj.keys():
    print("key:", k, " value:", obj[k])
