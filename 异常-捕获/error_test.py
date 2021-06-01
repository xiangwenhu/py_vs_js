
try:
    raise TypeError("类型错误");
    open(".../xxxxxx.ts")
except IOError as ioe:
    print("io error", ioe)
except TypeError as te:
    print("type error", te);
except Exception as e:
    print("common error", e.args)
finally:
    print("执行完毕")
