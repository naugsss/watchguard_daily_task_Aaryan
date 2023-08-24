# use python to access the database rows that have an area of 2,000,000 or greater. Then export the files to csv file


import sqlite3, csv
sqliteConnection = sqlite3.connect('section 4\database.db')
cursor = sqliteConnection.cursor()

content = cursor.execute("SELECT country FROM countries where area > 2000000")
content = content.fetchall()
print(content)
for i in content:
    print(i[0])

myFile = open('section 4\countries.csv', 'w')
writer = csv.writer(myFile)
writer.writerow(content)
myFile.close()
