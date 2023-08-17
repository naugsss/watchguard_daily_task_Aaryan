# Question: Please download the json file in the attachment and use Python to add a new employee to the file's content so that the file looks like in the expected output below.

import json

with open('section 3\company1.json', "r") as file:
    d = json.loads(file.read())
    d["employees"].append(dict(firstName = "Albert", lastName="Naugs"))
    file.seek(0)
    json.dump(d, file, indent=4, sort_keys=True)
    file.truncate() 


