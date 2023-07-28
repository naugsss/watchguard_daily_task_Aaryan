class FirstHundredGenerator:
    def __init__(self):
        self.number = 0

    def __next__(self):  # used for calling next of object
        if self.number < 100:
            current = self.number
            self.number += 1
        else:
            raise StopIteration()


my_gen = FirstHundredGenerator()
# print(my_gen.number)
# # my_gen.__next__()
# print(my_gen.number)

# this works the same as above
print(next(my_gen))
print(next(my_gen))
