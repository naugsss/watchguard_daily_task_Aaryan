friends = [
    {
        'name': 'Rolf',
        'location': 'Japan'
    },
    {
        'name': 'Aryan',
        'location': 'India'
    },
    {
        'name': 'Aaryan',
        'location': 'India'
    },
    {
        'name': 'naugs',
        'location': 'India'
    }
]

your_location = input("Where are you right now?")
friends_nearby = [friend for friend in friends if friend['location'] == your_location]
# if len(friends_nearby) > 0:
#     print('You"ve a friend nearby')
# else:
#     print("You don't have friend nearby")

if any(friends_nearby):
    print("You are not alone!")
    