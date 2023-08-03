import time
from multiprocessing import Process
from concurrent.futures import ProcessPoolExecutor


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


# start = time.time()
# ask_user()
# complex_calculations()
# print(f"Single thread total time : {time.time()-start} ")

# process = Process(target=complex_calculations)
# process.start()

# start = time.time()
# ask_user()
# process.join()

start = time.time()

with ProcessPoolExecutor(max_workers=2) as pool:
    pool.submit(complex_calculations)
    pool.submit(complex_calculations)



print(f'Two process total time : {time.time() - start}')