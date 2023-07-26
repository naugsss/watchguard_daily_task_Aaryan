import json
from add_student import add_data
from delete_student import delete_data
from list_student import list_data
from search_student import search_data
from update_student import update_data


def create_book_table():
    with open('student_data.txt', 'w') as file:
        json.dump([], file)


create_book_table()

print("***********  Student Management System  ***********")


def menu():
    print("Which operation you wish to perform : ")

    print("1. Add a new student.")
    print("2. Delete an existing student.")
    print("3. Update details of a student.")
    print("4. Search for a student.")
    print("5. List all the student.")
    print("6. Exit.")
    print(" ")

menu()

user_input = int(input("Enter your choice : "))


while user_input != 6:

    if user_input == 1:
        add_data()
    elif user_input == 2:
        delete_data()
    elif user_input == 3:
        update_data()
    elif user_input == 4:
        search_data()
    elif user_input == 5:
        list_data()
    menu()
    user_input = int(input("Enter your choice : "))

