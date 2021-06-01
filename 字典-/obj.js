const print = console.log
const obj = {
    name: "Tom",
    age: 10,
    weight: 60,
    height: 100
}

obj.name = "Tom +";
obj["age"] = 100;

print(obj);

print("keys:", Object.keys(obj))

for(let k in obj){
    print("key:", k, " value:", obj[k])
}