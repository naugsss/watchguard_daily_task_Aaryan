class Rectangle:

  __length = 0 
  __breadth = 0

  def __init__(self): 

    self.__length = 5
    self.__breadth = 3

    print(self.__length)
    print(self.__breadth)
 
rect = Rectangle() 
print(rect.length)
print(rect.breadth)
