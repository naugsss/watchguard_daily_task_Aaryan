import json
from controller.add_student import add_data
from controller.delete_student import delete_data
from controller.list_student import list_data
from controller.search_student import search_data
from controller.update_student import update_data
from login.admin_login import admin_menu


def create_book_table():
    with open('student_data.txt', 'w') as file:
        json.dump([], file)


create_book_table()

print("***********  Student Management System  ***********")


def menu():
    print("Do you want to login as Admin or Student ")
    print("if you wish to exit, please type exit")


menu()

user_input = input("Enter your choicee : ")
while user_input != 'exit':
    if user_input == 'admin':
        admin_menu()
    elif user_input == 'student':
        search_data()
    else:
        print("Wrong input made, please try again.")
    menu()
