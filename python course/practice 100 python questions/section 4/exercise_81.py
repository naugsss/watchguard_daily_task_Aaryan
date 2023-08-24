# create a script that let's user submit a password with the following conditions:

# password contains atleast one number
# password contains one uppercase number
# It is atleast 5 char long

# give the exact reason why the user has not created a wrong password.
# before asking for the password, ask for username

notes = []

while True:
    psw = input("Enter new password: ")
    if any(i.isdigit() for i in psw):
        if any(i.isupper() for i in psw):
            if len(psw) >= 5:
                print("Password is fine")
            else:
                print("Password is not fine")
                print("Length is less than 5")
        else:
            print("Password is not fine")
            print("There is no uppercase letter in the password")
    else:
        print("Password is not fine")
        print("There is no digit in the password")