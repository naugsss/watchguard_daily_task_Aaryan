from abc import abstractmethod, ABCMeta
class Animal(metaclass=ABCMeta):
    def walk(self):
        print("Walking")
    @abstractmethod
    def num_legs(self):
        pass
class Dog(Animal):
    def __init__(self, name):
        self.name = name
    def num_legs(self):
        return 4
class Monkey(Animal):
    def __init__(self, name):
        self.name = name
    def num_legs(self):
        return 2
animals = [Dog('rolf'), Monkey('joe')]
for a in animals:
    print(a.num_legs())