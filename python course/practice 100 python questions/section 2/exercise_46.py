# extract all the 26 files and print the 26 letters inside a list

import glob

letters = []

file_list = glob.glob("section 2\letters/*.txt")

for filename in file_list:
    with open(filename, "r") as file:
        letters.append(file.read().strip("\n"))
    
print(letters)