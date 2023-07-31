# from datetime import datetime, timezone

# print(datetime.now())
# print(datetime.now(timezone.utc))

import time

def measure_time(func):
    start = time.time()
    func()
    end = time.time()
    print(end - start)

def powers(limit):
    return [x**2 for x in range(limit)]

measure_time(lambda: powers(50000000))