def add_all(a1, a2, a3, a4):
    return a1 + a2 + a3 + a4


vals = (1, 2, 3, 4)
print(add_all(*vals))
print(add_all(1, 2, 3, 4))

new_val = {'a1': 1, 'a2': 2, 'a3': 3, 'a4': 4}
print(add_all(**new_val))
print(add_all(a1=new_val['a1'], a2=new_val['a2'], a3=new_val['a3'], a4=new_val['a4']))
