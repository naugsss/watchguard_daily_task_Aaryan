import aiohttp
import asyncio

import async_timeout
import time

# async def fetch_page(url):
#     async with aiohttp.ClientSession() as session:
#         # first it creates the session
#         start = time.time()
#         async with session.get(url) as response:
#             # then it asks the server for contents, calls the response and the send status
#             print(f'Page took : {time.time()-start}')
#             print(response.status)
#             return response.status

async def fetch_page(session, url):
    start = time.time()
    async with async_timeout.timeout(10):
        async with session.get(url) as response:
            print(f'Page took : {time.time()-start}')
            return response.status

# the main purpose of asyncio is to potentially suspend execution at any point and resume it after
# the asyncio allows us to manage and schedule these co-routines


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


# loop = asyncio.get_event_loop()

# # tasks = [fetch_page('http://google.com') for i in range(50)]
# # by the line above, no requests are actually happening, rather only co-routines are created.
# start = time.time()
# loop.run_until_complete(asyncio.gather(*tasks))
# print(f'All took {time.time() - start}')

loop = asyncio.get_event_loop()
urls = ['http://google.com' for i in range(50)]
start = time.time()
loop.run_until_complete(get_multiple_pages(loop, *urls))
print(f'All too {time.time()-start}')

