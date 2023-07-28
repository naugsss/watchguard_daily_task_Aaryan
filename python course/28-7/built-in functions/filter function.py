def helper(friend):
    return friend.startswith('R')

# instead of creating separate function we can create a lambda function


friends = ['Ram', 'Jose', 'naugs', 'Ritu', 'Aryan']
start_with_r = filter(helper, friends)
# The filter function returns a generator so it is more efficient since we don't need to copy
# the filter function takes 2 arguments.
# 1. a function which returns true or false
# 2. An iterable, on which the function can iterate

# print(next(start_with_r))

# for printing all the values, we can use the list() for printing
print(list(start_with_r))
print(list(start_with_r)) # this time it will return an [] empty list, because generator has
# already traversed the list once, and it remembers what it ran last time

another_starts_with_R = (f for f in friends if f.startswith('R'))
print(list(another_starts_with_R))
