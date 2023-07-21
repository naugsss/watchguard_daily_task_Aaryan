movies = []

def add_movie():
    movie_name = input("Enter the name of the movie ")
    movie_year = input(f"Enter the year of release of {movie_name} ")
    movie_director = input(f"Enter the name of the director of {movie_name} ")

    movies.append({
        'title':movie_name,
        'year':movie_year,
        'director':movie_director
    })

    print(movies)


def get_movie():

    if(len(movies) == 0):
        print("collection is empty, please add a movie")
        return

    flag = 1
    movie_to_search = input("Enter the movie you want to search for ")
    for movie in movies:
        if movie['title'].lower() == movie_to_search.lower():
            print(f"{movie_to_search} is present in our Collection")
            flag = 0
        
    if flag == 1:
        print("This movie is not in our list.")

def list_movie():
    if(len(movies) == 0):
        print("collection is empty, please add a movie")
        return
    # print("Name, Year of release, director name")
    for movie in movies:
        print(f"Name : {movie['title']} Released in {movie['year']} Directed by : {movie['director']}")

def menu():
    print("Choose from the following options : ")
    print("1. Add a new movie to the collection ")
    print("2. Get the details for a particular movie ")
    print("3. Get the list of movies in the collection ")
    print("4. Exit") 

user_options = {
    "1" : add_movie,
    "2" : get_movie,
    "3" : list_movie

}

while True:
    menu()
    user_input = input()
    if int(user_input) == 4:
        break
    if user_input in user_options:
        selected_function = user_options[user_input]
        selected_function()
    else:
        print("please enter the correct option")

