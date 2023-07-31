def create_account(name:str, holder:str, account_holders = None):
    if not account_holders:
        account_holders = []
    account_holders.append(holder)

    return {
        'name' : name,
        'main_account_holder' : holder,
        'account_holder' : account_holders
    }

a1 = create_account('Checking', 'Rolf', ['jen'])
a2 = create_account('savings', 'jen')

print(a2)