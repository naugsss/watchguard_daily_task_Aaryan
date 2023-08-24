import pytest


@pytest.fixture(scope='module', autouse=True)
def setupModule2():
    print("\nSetup Module 2")


@pytest.fixture(scope='module', autouse=True)
def setupClass2():
    print("\nSetup Class 2")


@pytest.fixture(scope='module', autouse=True)
def setupFunction2():
    print("\nSetup Function 2")


class TestClass:
    def test_it(self):
        print("Test 1")
        assert True

    def test_it2(self):
        print("Test 2")
        assert True
