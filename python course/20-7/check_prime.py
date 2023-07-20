

for num in range (2,10):
    for idx in range(2,num):
        if(num%idx == 0):
            print(f"{num} equals {idx}*{num//idx}")
            break
    else:
        print(f"{num} is a prime number")