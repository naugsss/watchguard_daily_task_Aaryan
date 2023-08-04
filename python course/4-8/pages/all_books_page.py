import re
from bs4 import BeautifulSoup
from locators.all_books_page import AllBooksPageLocators
from parsers.book_parser import BookParser

class AllBooksPage:
    def __init__(self, page_content):
        self.soup = BeautifulSoup(page_content, 'html.parser')
    
    @property
    def books(self):
        # this line will iterate over all the tags and then create a book parser object
        # our book parser object will receive the tags
        return [BookParser(e) for e in self.soup.select(AllBooksPageLocators.BOOKS) ]
    
    @property
    def page_count(self):
        content = self.soup.select_one(AllBooksPageLocators.PAGER).string
        pattern = 'Page [0-9]+ of ([0-9]+)'
        # we've put extra brackets to show a large number
        matcher = re.search(pattern, content)
        pages = int(matcher.group(1))
        # this will matching something which is inside the bracket
        return pages