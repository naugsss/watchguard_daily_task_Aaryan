# from the database file print those countries name which have an area greater than 2,000,000

import sqlite3
sqliteConnection = sqlite3.connect('section 4\database.db')
cursor = sqliteConnection.cursor()

content = cursor.execute("SELECT * FROM countries where area > 2000000")
print(content.fetchall())

sqliteConnection.close()