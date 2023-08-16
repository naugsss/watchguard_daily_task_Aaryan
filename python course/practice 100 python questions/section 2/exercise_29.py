# Please write a function that calculates liquid volume in a sphere using the following formula. The radius r  is always 10, so consider making it a default parameter.


# You can then test your solution by passing 2 for h and you should get the expected output.

r  = 10
pie = 3.14159265359
h = 2
volume = ((4*pie*(r**3))/3) - ((pie*(h**2)*(3*r - h))/3)

print(volume)