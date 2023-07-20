# cars = [
#     {"make" : "Ford", "Model" : "Fiesta", "mileage" : 23000, "fuel" : 460},
#     {"make" : "Ford", "Model" : "Focus", "mileage" : 17000, "fuel" : 350},
#     {"make" : "Mazda", "Model" : "MX-5", "mileage" : 49000, "fuel" : 900},
#     {"make" : "Mini", "Model" : "Cooper", "mileage" : 31000, "fuel" : 235}
# ]

# def calculate_mpg(car):
#     mpg = car["mileage"] / car["fuel"]
#     return mpg

# def car_name(car):
#     name = f"{car['make']}{car['Model']}"
#     return name

# def print_car_info(car):
#     name = car_name(car)
#     mpg = calculate_mpg(car)
#     print(f"{name} does {mpg} miles per gallon")

# for car in cars:
#     print_car_info(car)

# Another example

def divide(x,y):
    if y == 0:
        return "you are dividing a number by 0"
    else:
        return x/y
    
print(divide(2,0))