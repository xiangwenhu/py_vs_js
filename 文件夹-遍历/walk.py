import os
import sys

def walk(dir):
    for root, dirs, files in os.walk(dir):
        for file in files:
            print(os.path.join(root, file))
        for dir in dirs:
            print(os.path.join(root, dir))


currentDir = os.path.split(os.path.realpath(sys.argv[0]))[0]
walk(currentDir);