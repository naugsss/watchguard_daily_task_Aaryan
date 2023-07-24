class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
    
    def __repr__(self):
        return f'<Car {self.make} {self.model}>'

class Garage:
    def __init__(self):
        self.cars = []
    def __len__(self):
        return len(self.cars)
    def add_car(self, car):
        if not isinstance(car, Car):
            raise TypeError("Type does not matches")

ford = Garage()
fiesta = Car("ford", "fiesta")

try:
    ford.add_car('fiesa')
except TypeError:
    print("your car was not a car")
except ValueError:
    print("Something unexpected happened")
finally:
    print(f"The garage has now {len(ford)} cars.")


# if isinstance(fiesta, Car):
#     ford.add_car(fiesta)
#     print("Car added successfully")
# else:
#     print('Your car was not a car')
# print(len(ford))

# # Creating our own custom error
# class MyCustomError(TypeError):
#     def __init__(self, message, code):
#         super().__init__(message)
#         self.code = code

# raise MyCustomError("Error happened!", 500)