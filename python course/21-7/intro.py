my_student = {
    'name' : 'Rolf Smith',
    'grades' : [70,88,99,90]
}

def calc_avg(student):
    return sum(student['grades']) / len(student['grades'])

print (calc_avg(my_student))

class Student:
    def __init__(self, new_name, new_grades):
        self.grades = new_grades
        self.name = new_name

    def average(self):
        return sum(self.grades) / len(self.grades)
    

student_one = Student('Naugs', [70,88,90,99])


