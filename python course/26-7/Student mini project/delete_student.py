import json


def delete_data():
    user_input = input("Enter the user ID which you want to delete : ")

    with open('student_data.txt', 'r') as file:
        contents = json.load(file)

    updated_data = [student for student in contents if student["uid"] != user_input]

    with open('student_data.txt', 'w') as file:
        json.dump(updated_data, file)
