import json

file = open('25-7\json/friends_json.txt', 'r') #this is a pointer
content = json.load(file) # converts the string(JSON format) into dictionary

file.close()
print(content['friends'][0])

cars = [
    {'make' : 'Ford', 'model' : 'Fiesta'},
    {'make' : 'Ford', 'model' : 'focus'}
]

file = open('25-7\json\cars_json.txt', 'w')
json.dump(cars, file) # converts the dictionary back into string (JSON format)
file.close()