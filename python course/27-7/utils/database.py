import sqlite3
from .database_connection import DatabaseConnection


"""
Concerned with storing and retrieving books from a list

"""


def create_book_table():
    with DatabaseConnection('../data.db') as connection:
        # now the below set of statements are inside the context manager block
        # this creates a new variable connection, and then we use that to create cursor
        cursor = connection.cursor()
        cursor.execute('CREATE TABLE IF NOT EXISTS books(name text primary key, author text, read integer)')


def add_book(name, author):
    with DatabaseConnection('../data.db') as connection:
        cursor = connection.cursor()
        cursor.execute('INSERT INTO books VALUES(?,?,0)', (name, author))


def get_all_books():
    with DatabaseConnection('../data.db') as connection:
        cursor = connection.cursor()
    # this will point to the starting point of the table
        cursor.execute('SELECT * FROM books')
    # now we are fetching the values inside our book (dictionary)
    # entire row will be fetched at a time, so we are assigning values
    # a single row will consist of : name author read
        books = [{'name': row[0], 'author': row[1], 'read': row[2]} for row in cursor.fetchall()]

    return books


def mark_book_as_read(name):
    with DatabaseConnection('../data.db') as connection:
        cursor = connection.cursor()
        cursor.execute('UPDATE books SET read = 1 WHERE name = ?', (name,))
    #     we are indicating the name variable that it is a tuple and not a mathematical string


def delete_book(name):
    with DatabaseConnection('../data.db') as connection:
        cursor = connection.cursor()
        cursor.execute('DELETE FROM books WHERE name = ? ', (name,))