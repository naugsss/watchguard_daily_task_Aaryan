# Reading contents of a file
my_file = open('25-7\data.txt', 'r')
file_content = my_file.read()
my_file.close()
print(file_content)

# writing to a file
user_name = input("Enter a name : ")
my_file_writing = open('25-7\data.txt', 'w')
my_file_writing.write(user_name)
my_file_writing.close()

