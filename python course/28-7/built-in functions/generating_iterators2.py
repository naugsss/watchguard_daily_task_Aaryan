# this file is just a copy of the generating_iterators, here I've written another method of doing the same thing.
class FirstHundredGenerator:
    def __init__(self):
        self.number = 0

    def __next__(self):  # used for calling next of object
        if self.number < 100:
            current = self.number
            self.number += 1
            return current
        else:
            raise StopIteration()

    def __iter__(self):
        return self


val = sum(FirstHundredGenerator())
print(val)

for i in FirstHundredGenerator():
    print(i)


# generator comprehension
my_numbers = (x for x in [1,2,3,4,5])
# this lets you go over the list one by one
print(next(my_numbers))