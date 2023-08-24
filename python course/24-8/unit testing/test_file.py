import pytest

@pytest.fixture()
def db():
    print("-----------------SETUP-------------------")

def test_me(db):
    print("Test 1")
    assert True


def test_me2():
    print("Test 2")
    assert True

#
# def not_a_test():
#     assert True
