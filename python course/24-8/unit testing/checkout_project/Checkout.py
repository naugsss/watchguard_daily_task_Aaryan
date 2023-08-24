class Checkout:
    class Discount:
        def __init__(self, no_of_items, price):
            self.no_of_items = no_of_items
            self.price = price

    def __init__(self):
        self.prices = {}
        self.discounts = {}
        self.items = {}
        # self.total = 0

    def add_discount(self, item, no_of_items, price):
        discount = self.Discount(no_of_items, price)
        self.discounts[item] = discount

    def add_item_price(self, item, price):
        self.prices[item] = price

    def add_item(self, item):
        if item in self.items:
            self.items[item] += 1
        else:
            self.items[item] = 1

    def calculate_total(self):
        # return self.total
        total = 0
        for item, cnt in self.items.items():
            if item in self.discounts:
                discount = self.discounts[item]
                if cnt >= discount.no_of_items:
                    no_of_discounts = cnt/discount.no_of_items
            total += self.prices[item] * cnt
        return total
