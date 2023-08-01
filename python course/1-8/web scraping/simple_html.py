from bs4 import BeautifulSoup

SIMPLE_HTML = '''<html>
<head></head>
<body>

<h1>This is a title</h1>
<p class = "Subtitle">This is a subtitle</p>
<ul>
    <li>Naugs</li>
    <li>Aryan</li>
    <li>abhi</li>    
</ul>
<p>This is a para without any class</p>
</body>
</html>
'''


def find_using_class():
    paragraph = simple_soup.find('p', {'class': 'Subtitle'})
    print(paragraph.string)


def find_list_items():
    list_items = simple_soup.findAll('li')
    list_contents = [e.string for e in list_items]
    print(list_contents)


def find_other_paragraphs():
    paragraphs = simple_soup.findAll('p')
    other_paragraph = [p for p in paragraphs if 'Subtitle' not in p.attrs.get('class', [])]
    print(other_paragraph[0].string)


simple_soup = BeautifulSoup(SIMPLE_HTML, 'html.parser')
# h1_tag = simple_soup.find('h1')
# print(h1_tag.string)
# find_list_items()
# find_using_class()
find_other_paragraphs()
