import requests

MAILGUN_API_URL = ""
MAILGUN_API_KEY = 1234

FROM_NAME = "Jose"
FROM_EMAIL = "jose@schoolofcode.me"

TO_EMAILS = ["another@gmail.com"]
SUBJECT = "Test e-mail"
CONTENT = "Hello, this is a test e-mail"

requests.post(
    MAILGUN_API_URL,
    auth=("api", MAILGUN_API_KEY),  # this is basic auth
    data={
        "from": f"{FROM_NAME} <{FROM_EMAIL}>",
        "to": TO_EMAILS,
        "subject": SUBJECT,
        "text": CONTENT,
    },
)
