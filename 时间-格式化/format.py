import time

def format(date):
    return time.strftime("%Y-%m-%d %H:%M:%S", date)

print(format((2020, 1, 1, 1, 1, 1, 0, 0, 0)))
