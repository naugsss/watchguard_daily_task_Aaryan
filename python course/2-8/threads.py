import time
from threading import Thread
from concurrent.futures import ThreadPoolExecutor

def ask_user():
    start = time.time()
    user_input = input("Enter your name : ")
    greet = f'Hello {user_input}'
    print(greet)
    print(f'ask user - {time.time() - start}')

def complex_calculations():
    start = time.time()
    print("Start Calculating : ")
    [x**2 for x in range(20000000)]
    print(f'complex_calculations - {time.time() - start}')


# # start = time.time()
# # ask_user()
# # complex_calculations()
# # print(f"Single thread total time : {time.time()-start} ")

# thread1 = Thread(target=complex_calculations)
# thread2 = Thread(target=ask_user)

# start = time.time()
# thread1.start()
# thread2.start()

# thread1.join()
# thread2.join()

# print(f'Two thread total time : {time.time() - start}')


with ThreadPoolExecutor(max_workers=2) as pool:
    pool.submit(complex_calculations)
    pool.submit(ask_user)