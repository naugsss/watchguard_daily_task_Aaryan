friends = ['Ram', 'Jose', 'naugs', 'Ritu', 'Aryan']

friends_lower = map(lambda x: x.lower(), friends)
# this is of object type
friends_lower = [friend.lower() for friend in friends]
# this is of list type
friends_lower = (friend.lower() for friend in friends)
# this is of generator type
# print(list(friends_lower))


# the map function also take 2 input parameter
# 1. A function which
# 2. An iterable

class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    @classmethod
    def from_dict(cls, data):
        return cls(data["username"], data["password"])


users = [
    {"username": 'Rolf', "password": '123'},
    {"username": 'naugs', "password": 'abc'}
]

users = [User.from_dict(user) for user in users]
users = map(User.from_dict, users)

print(list(users))