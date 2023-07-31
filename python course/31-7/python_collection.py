# # Counter
# from collections import Counter

# temp = [12,14,15,12,16,14,14,14,13]
# temp_count = Counter(temp)
# print(Counter(temp))
# print(temp_count[14])

# # default dict

# from collections import defaultdict

# coworkers = [('Rolf', 'MIT'), ('Jen', 'Oxford'), ('Rolf', 'Cambridge'), ('Charlie', 'Manchester')]

# alma_matters = {}

# for coworker, place in coworkers:
#     if coworker not in alma_matters:
#         alma_matters[coworker] = []
#     alma_matters[coworker].append(place)

# this is one way of coding, another can be using default_dict

# from collections import defaultdict

# coworkers = [('Rolf', 'MIT'), ('Jen', 'Oxford'), ('Rolf', 'Cambridge'), ('Charlie', 'Manchester')]

# alma_matters = defaultdict(list)
# # we are passing list which means that if nothing is passed or no value is present then list will be returned in the ouput.

# for coworker, place in coworkers:
#     alma_matters[coworker].append(place)

# print(alma_matters['Rolf'])
# print(alma_matters['Anne'])

# # namedtuple

# from collections import namedtuple

# # this is a tuple
# account = ('checking', 1850.90)

# # we specify the type of the named tuple, which is the Account type
# Account = namedtuple('Account', ['name', 'balance'])

# accountNamedTuple = Account(*account)

# print(accountNamedTuple._asdict())




