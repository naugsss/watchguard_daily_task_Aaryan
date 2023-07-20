# multiplying a list by 2
numbers = [0,1,2,3,4,5]
doubled_number = []

for number in numbers:
    doubled_number.append(number*2)

print(doubled_number)

# shortcut method
new_double_list = [number*2 for number in numbers]
print(new_double_list)

single_number = [5 for _ in range(5)]
print(single_number)

friend_ages = [12,33,23,18]

age_strings = [f"My friends is {age} years old." for age in friend_ages]
print(age_strings)

friend = input("Enter your friend name : ")
friends = ["Rolf", "Bob", "Tim", "Jane"]

friends_lower = [name.lower() for name in friends]

if friend.lower() in friends_lower:
    print(f"{friend} is one of your friend")

# comprehension with Conditionals

#printing all the odd elements inside the array
ages = [22,35,47,33]
odds = [age for age in ages if age % 2 != 0]
print(odds)

# another example
friends = ["Rolf", "Ruth", "Charlie", "Jen"]
guests = ["Rolf", "Charlie", "Bob"]

friends_lower = [f.lower() for f in friends]

present_friends = [
    name.title() for name in friends if name.lower() in friends_lower
]

# this line means that we've chosen variable as name and if name.lower() is in friends.lower() then we'll copy name.title() inside present_friends

print(present_friends)
