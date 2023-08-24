# create a program that asks the user to input values seperated by commas and those values will be stored in a separate line each in a text file

user_input = input("Enter values separated by commas: ")

user_input = user_input.split(",")

with open("section 4\\user_input.txt", "w") as f:
    for i in user_input:
        f.write(i + "\n")