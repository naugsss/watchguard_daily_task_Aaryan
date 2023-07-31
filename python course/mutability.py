friends_last_seen = {
    'Rolf': 31,
    'Jen': 1
}


def see_friends(friends, name):
    print(id(friends))
    friends[name] = 0


print(id(friends_last_seen))
print(id(friends_last_seen['Rolf']))
see_friends(friends_last_seen, 'Rolf')
print(id(friends_last_seen['Rolf']))
print(id(friends_last_seen))
