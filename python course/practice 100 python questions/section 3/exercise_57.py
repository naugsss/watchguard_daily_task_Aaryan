# Question: Please download the file in the attachment and use Python to print out its content.


import json
with open('section 3\company1.json', "r") as file:
    d = json.loads(file.read())

print(d)