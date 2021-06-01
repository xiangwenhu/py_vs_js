import os
import glob
import sys

def getFiles(dir):
    return glob.glob("%s/**/*.*" % (dir), recursive=True)


currentDir = os.path.split(os.path.realpath(sys.argv[0]))[0]
print("currentDir", currentDir)
files = getFiles(currentDir)
print(files)
