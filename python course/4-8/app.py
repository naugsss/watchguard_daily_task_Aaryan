import requests
import logging
import async_timeout
import asyncio
import aiohttp
import time
from pages.all_books_page import AllBooksPage

loop = asyncio.get_event_loop()

logging.basicConfig(format = '%(asctime)s %(levelname)-8s [%(filename)s:%(lineno)d] %(message)s', datefmt='%d-%m-%Y %H:%M:%S', level=logging.DEBUG,filename='logs.txt')

logger = logging.getLogger('Scraping')
logger.info('Loading books list...')


page_content = requests.get('http://books.toscrape.com').content
page = AllBooksPage(page_content)

books = page.books

async def fetch_page(session, url):
    start = time.time()
    async with async_timeout.timeout(10):
        async with session.get(url) as response:
            print(f'Page took : {time.time()-start}')
            return response.status
        
async def get_multiple_pages(loops, *urls):
    tasks = []
    async with aiohttp.ClientSession(loop=loop) as session:
        # we are using the loop which we've passed and no new loop is created.
        for url in urls:
            tasks.append(fetch_page(session, url))
            # we are appending the co-routine

        grouped_tasks = asyncio.gather(*tasks)
        return await grouped_tasks
    # this will allow us to suspend the execution here and wait for something to happen in asyncio.gather(*tasks) and then resume the functionality 

urls = [f'http://google.com' for page_num in range(1,page.page_count)]

start = time.time()
pages = loop.run_until_complete(get_multiple_pages(loop, *urls))
print(f'Total page requests took : {time.time() - start}')

for page_content in pages:
    logger.debug("Creatng all books page.")
    page = AllBooksPage(page_content)
    books.extend(page.books)
