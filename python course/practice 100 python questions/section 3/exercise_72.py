# Exercise for reference: 

# Create a script that let the user type in a search term and then the program opens the browser and searches the term on Google.


import webbrowser
 
query = input("Input your query: ")
webbrowser.open("https://google.com/search?q=%s" % query)