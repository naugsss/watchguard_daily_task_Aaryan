# Question: Please download the attached ZIP file and extract its files in a folder. Then, write a script that counts and prints out the number of .py files in that folder.

# Expected output: 

# 2
import os

content = os.listdir("section 4\\files")
for line in content:
    if line.endswith(".py"):
        print(line)

