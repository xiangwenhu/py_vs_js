import re

# 替换#后面的内容为空
text = "158000000#手机号码";
print(re.sub("#.*$","", text));

# 分组
dateText = "2018-01-06";
reDate = re.compile("(\d{4})-(\d{1,2})-(\d{1,2})");
print(reDate.search(dateText).groups())
