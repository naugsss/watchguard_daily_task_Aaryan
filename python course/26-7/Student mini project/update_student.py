import json


def update_data():
    user_input = input("Enter the user id of the user in which you wish to make changes : ")

    value_to_change = input("What do you wish to change name, email, phone : ")
    updated_value = input(f'Enter updated {value_to_change} : ')
    with open('student_data.txt', 'r') as file:
        contents = json.load(file)

    for content in contents:
        if content['uid'] == user_input:
            content[value_to_change] = updated_value
            print(f"{value_to_change} has been to {updated_value}")

    file = open('student_data.txt', 'w')
    json.dump(contents, file)
    file.close()
