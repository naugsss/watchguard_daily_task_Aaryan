# Question: Create a script that generates a file where all letters of the English alphabet are listed two in each line. The inside of the text file would look like:

# ab
# cd
# ef

# and so on.

import string
 
with open("letters.txt", "w") as file:
    for letter1, letter2 in zip(string.ascii_lowercase[0::2], string.ascii_letters[1::2]):
        file.write(letter1 + letter2 + '\n')