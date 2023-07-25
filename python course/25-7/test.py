class BankAccount:
   def __init__(self, account_number, balance):
      self.__account_number = account_number
      self.__balance = balance
    
   def __display_balance(self):
      print("Balance:", self.__balance)

b = BankAccount(1234567890, 5000)
b._BankAccount__display_balance() 