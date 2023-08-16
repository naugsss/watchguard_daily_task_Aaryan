# Question: Please download the words1.txt file from the attachment and then create a Python function that takes a text file as input and returns the number of words contained in the text file.

# Expected output:

# 10 

with open('section 2\words1.txt') as file:
    contents = file.read()
    contents = contents.split(" ")
    print(len(contents))