'''
Question: Complete the script so that it produces the expected output. Please use my_range  as input data.

my_range = range(1, 21)
 Expected output:

[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
'''

my_range = range(1, 21)
my_range = [my_range*10 for my_range in list(my_range)]
print(my_range)