from collections import deque

friends = deque(('Rolf', 'Jane', 'Tim', 'Charlie'))

def get_friends():
    yield from friends


# c = get_friends()
# print(next(c))
# print(next(c))

def greet(g):
    while True:
        try:
            friend = next(g)
            yield(f'Hello {friend}')
        except StopIteration:
            pass 

friends_generators = get_friends()
g = greet(friends_generators)
print(g)