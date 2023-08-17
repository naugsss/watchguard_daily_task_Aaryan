# create a program that generates a password alphanumeric

import random
 
characters = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?"
chosen = random.sample(characters, 6)
print(chosen)
password = "".join(chosen)
print(password)