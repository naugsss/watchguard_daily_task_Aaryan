class Student:
    def __init__(self, name, school):
        self.name = name
        self.school = school
        self.marks = []
    
    def average(self):
        return sum(self.marks) / len(self.marks)
    
class Workingstudent(Student):
    def __init__(self, name, school, salary):
        super().__init__(name, school)
        self.salary = salary
    
    def weekly_salary(self):
        return self.salary * 37.5

tim = Workingstudent('Tim', 'MIT', '50.0')
print(tim.salary)
tim.marks.append(56)
tim.marks.append(99)

print(tim.average())
print(tim.weekly_salary())



class Foo:
    @classmethod
    def hi(cls):
    # the cls word indicates that this is a class method and this parameter is going to hold the value of the class that it was called with. So that's foo
        print(cls.__name__)

my_object = Foo()
my_object.hi()

class Bar:
    @staticmethod
    def hi():
        print("I don\'t take any parameters")

another_object = Bar()
another_object.hi()