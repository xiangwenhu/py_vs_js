const print = console.log;
// 替换#后面的内容为空
const text = "158000000#手机号码";
print(text.replace(/#.*$/,"")); //158000000

// 分组
dateText = "2018-01-06";
execArray = /(\d{4})-(\d{1,2})-(\d{1,2})/.exec(dateText)
print(execArray)  // ['2018-01-06','2018','01','06',index: 0,input: '2018-01-06', groups: undefined ]

// /(\d{4})-(\d{1,2})-(\d{1,2})/.exec(dateText)
// print(":", RegExp.$1, RegExp.$2, RegExp.$3)

