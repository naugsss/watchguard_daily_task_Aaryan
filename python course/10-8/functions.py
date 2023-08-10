from typing import Union


def divide(dividend: Union[int, float], divisor: Union[int, float]):
    if divisor == 0:
        raise ValueError("The divisor cannot be 0")
    return dividend / divisor


def multiply(*args: Union[int, float]):
    #     this can accept multiple arguments at the same time
    #  multiply(3, 5, 9)
    if len(args) == 0:
        raise ValueError("At least one value to multiple must be passed.")

    total = 1
    for arg in args:
        total *= arg

    return total
