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


class FirstHundredIterable:
    def __iter__(self):
        return FirstHundredGenerator()

val = sum(FirstHundredIterable())
print(val)

for i in FirstHundredIterable():
    print(i)
