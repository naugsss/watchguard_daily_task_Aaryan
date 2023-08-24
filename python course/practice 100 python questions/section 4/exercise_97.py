# create a program that asks the user to submit text repeatedly, the program saves the changes when the user submits SAVE but doesn't close, the program saves the changes and closes when the user submits CLOSE

file = open("section 4\\user_input.txt", "a+")

while True:
    line  = input("Enter a value : ")
    if line == "SAVE":
        file.close()
        file = open("section 4\\user_input.txt", "a+")
    elif line == "CLOSE":
        file.close()
        break
    else:
        file.write(line + "\n")