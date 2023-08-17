# Question: Please concatenate "https://pythonhow.com/media/data/sampledata.txt" file with "https://pythonhow.com/media/data/sampledata_x_2.txt" one to a single text file. The content of the output file should look like below.

# Expected output: 

# x,y
# 3,5
# 4,9
# 6,10
# 7,11
# 8,12
# 6,10
# 8,18
# 12,20
# 14,22
# 16,24

import pandas
 
data1 = pandas.read_csv("http://www.pythonhow.com/data/sampledata.txt")
data2 = pandas.read_csv("sampledata_x_2.txt")
data12 = pandas.concat([data1, data2])
data12.to_csv("sampledata12.txt", index=None)

