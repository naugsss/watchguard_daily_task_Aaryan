# ask the user for a list of 3 friends
# for each friend we'll tell the user whether they are nearby or not
# for each nearby friend, we'll save their name to nearby_friends.txt

friends = input('Enter the friends name, seperated by commans and no spaces please : ').split(',')

people = open('25-7\people.txt', 'r')
people_nearby = [line.strip() for line in people.readlines()]
# this thing is done to remove the '\n' character at the end of the every word, it basically removes the leading and trailing white spaces.

people.close()

friends_set = set(friends)
people_nearby_set = set(people_nearby)

friends_nearby_set = friends_set.intersection(people_nearby_set)

nearby_friends_file = open('25-7/nearby_friends.txt', 'w')

for friend in friends_nearby_set:
    print(f'{friend} is nearby, you can meet with them.')
    nearby_friends_file.write(f'{friend}\n')

nearby_friends_file.close()