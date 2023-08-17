# create a script that let's user submit a password with the following conditions:

# password contains atleast one number
# password contains one uppercase number
# It is atleast 5 char long
# else print "Password is not fine".

while True:
    psw = input("Enter new password: ")
    if any(i.isdigit() for i in psw) and any(i.isupper() for i in psw) and len(psw) >= 5:
        print("Password is fine")
        break
    else:
        print("Password is not fine")