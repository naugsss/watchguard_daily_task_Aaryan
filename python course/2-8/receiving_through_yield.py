def greet():
    friend = yield
    print(friend)
    print(f'Hello, {friend}')

g = greet()
g.send("abc") # priming the generator.
# g.send("Naugs")