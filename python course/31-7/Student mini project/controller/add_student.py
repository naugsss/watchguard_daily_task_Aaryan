import json


class Student:
    def __init__(self, uid, name, phone, email):
        self.uid = uid
        self.name = name
        self.phone = phone
        self.email = email

    def add_to_db(self):
        data = {
            "uid": self.uid,
            "name": self.name,
            "email": self.email,
            "phone": self.phone
        }
        contents = []

        file = open('C:\coding\WG\python course\\26-7\Student mini project\student_data.txt', 'r')
        contents = json.load(file)
        file.close()

        contents.append(data)

        file = open('C:\coding\WG\python course\\26-7\Student mini project\student_data.txt', 'w')
        json.dump(contents, file)
        file.close()


def add_data():
    print("Please enter the following details of the student : ")
    user_id = input("Enter your user ID: ")
    user_name = input("Enter your name : ")
    user_phone = input("Enter your phone number : ")
    user_email = input("Enter your email id : ")

    student = Student(user_id, user_name, user_phone, user_email)
    student.add_to_db()
