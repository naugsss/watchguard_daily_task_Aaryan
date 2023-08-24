import pytest

from checkout_project.Checkout import Checkout


@pytest.fixture()
def checkout():
    checkout = Checkout()
    checkout.add_item_price("a", 1)
    checkout.add_item_price("b", 2)
    return checkout


# def test_canInstantiateCheckout():
#     co = Checkout()


# def test_canAddItemPrice(checkout):
#     checkout.add_item_price("a", 1)
#
#
# def test_canAddItem(checkout):
#     checkout.add_item("a")


def test_can_calculate_total(checkout):
    checkout.add_item_price("a", 1)
    checkout.add_item("a")
    assert checkout.calculate_total() == 1


def test_get_correct_total_with_multiple_items(checkout):
    checkout.add_item("a")
    checkout.add_item("b")
    assert checkout.calculate_total() == 3


def test_can_add_discount_rule(checkout):
    checkout.add_discount("a",3,2)


# this decorator will ignore this test and skip this
def test_can_apply_discount_rule(checkout):
    checkout.add_discount("a",3,2)
    checkout.add_item("a")
    checkout.add_item("a")
    checkout.add_item("a")
    assert checkout.calculate_total() == 2
