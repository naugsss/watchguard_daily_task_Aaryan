avg = lambda seq: sum(seq)/len(seq)
total = lambda seq: sum(seq)
top = lambda seq : max(seq)

operations = {
    "Average" : lambda seq: sum(seq)/len(seq),
    "Total" : lambda seq: sum(seq),
    "Top" : lambda seq : max(seq)
}

students = [
    {"name" : "Tim", "grades" : {12,34,56,78}},
    {"name" : "Joe", "grades" : {20,43,61,80}},
    {"name" : "Ben", "grades" : {19,36,55,88}},
]

for student in students:
    name = student["name"]
    grades = student["grades"]

    print(f"Student : {name}")
    operation = input(("Enter 'Average', 'Total' or 'Top' "))

    operation_function = operations[operation]
    print(operation_function(grades))