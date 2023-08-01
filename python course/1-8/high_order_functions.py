# def greet():
#     print("Hello")

# def before_and_after(func):
#     print("Before")
#     func()
#     print("After")

# before_and_after(greet)

movies = [
    {"name":"The Matrix", "director":"Wachoski"},
    {"name":"Klaus", "director":"Pablos"}
]

def find_moive(expected, finder):
    for movie in movies:
        if finder(movie) == expected:
            return movie

find_by = input("What are we searching for : ")
looking_for = input("What are you looking for ? ")
movie = find_moive(looking_for, lambda movie : movie[find_by])
print(movie or "No movies found")