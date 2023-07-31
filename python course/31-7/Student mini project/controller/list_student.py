import json


def list_data():
    with open('C:\coding\WG\python course\\26-7\Student mini project\student_data.txt', 'r') as file:
        contents = json.load(file)

    for content in contents:
        user_id = content['uid']
        user_name = content['name']
        user_email = content['email']
        user_phone = content['phone']

        print(f'{user_id} --> {user_name}  {user_email}  {user_phone}')
