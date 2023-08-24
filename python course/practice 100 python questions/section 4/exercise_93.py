# Question: Please download the attached ZIP file. Inside the ZIP file, there's a directory named subdirs. That directory contains other directories inside. Please write a script that counts the number of .py files contained inside subdirs and all its sub-directories.

# Expected output: 

# 3

import os
cnt = 0
for (roots, dirs, files) in os.walk("section 4\subdirs"):
    for file in files:
        if file.endswith(".py"):
            cnt+=1
            # print(file)

print(cnt)