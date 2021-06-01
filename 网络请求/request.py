
import urllib.request
import urllib.parse
import os
import sys
import ssl

currentDir = os.path.split(os.path.realpath(sys.argv[0]))[0];

headers = {    
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36",
}

context = ssl._create_unverified_context()
request = urllib.request.Request('https://www.baidu.com', headers=headers)

res = urllib.request.urlopen(request, context=context)
html = res.read().decode('utf-8')

with open(os.path.join(currentDir, "./_py_baidu.html"), "w") as f:
    f.write(html)
