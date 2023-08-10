import requests

class PageRequester:
    def __init__(self, url:str):
        self.url = url

    def get(self):
        # this method will return the content of the response
        return requests.get(self.url).content
