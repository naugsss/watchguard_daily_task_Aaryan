# Question: Create a function that takes a text file as input and returns the number of words contained in the text file. Please take into consideration that a comma can separate some words with no space. For example, "Hi, it's me." would need to be counted as three words. For your convenience, you can use the text file in the attachment.


with open('section 2\words2.txt') as file:
    contents = file.read()
    contents = contents.replace(",", " ")
    contents = contents.split(" ")
    print(len(contents))

file.close()