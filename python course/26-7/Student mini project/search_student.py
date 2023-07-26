import json


def search_data():
    user_input = input("Enter the user id of the student whom you want to search : ")

    with open('student_data.txt', 'r') as file:
        contents = json.load(file)
    flag = 0
    for content in contents:
        if content['uid'] == user_input:
            print("Yes this person exist in our system")
            flag = 1
    if flag == 0:
        print("There is no such user")
