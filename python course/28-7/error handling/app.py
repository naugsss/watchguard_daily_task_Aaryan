import json

with open('C:\coding\WG\python course\\28-7\error handling\data.txt', 'r') as file:
    try:
        j = json.load(file)
    except:
        print("Error while opening the file")

print(j)
