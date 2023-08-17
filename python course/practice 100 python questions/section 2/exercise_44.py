# Create a script that generates a file where all letters of the English alphabet are listed three in each line.

import string
 
letters = string.ascii_lowercase + " "
 
slice1 = letters[0::3]
slice2 = letters[1::3]
slice3 = letters[2::3]
 
with open("letters.txt", "w") as file:
    for s1, s2, s3 in zip(slice1, slice2, slice3):
        file.write(s1 + s2 + s3 + "\n")