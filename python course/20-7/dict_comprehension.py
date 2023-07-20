friends = ["Rolf", "Ruth", "Charlie", "Jen"]
ages = [33,24,52,40]

friends_details = {
    friends[i] : ages[i]
    for i in range(len(friends))
}
print(friends_details)


# Shortcut method
friends_details = dict(zip(friends, ages))
print(friends_details)

