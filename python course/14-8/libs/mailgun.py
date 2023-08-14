import requests

from email_mailgun import MAILGUN_API_URL


class Mailgun:
    MAILGUN_API_URL = ""
    MAILGUN_API_KEY = 1234

    FROM_NAME = "Jose"
    FROM_EMAIL = "jose@schoolofcode.me"

    @classmethod
    def send_emails(cls, to_emails, subject, content):
        requests.post(
            cls.MAILGUN_API_URL,
            auth=("api", cls.MAILGUN_API_KEY),  # this is basic auth
            data={
                "from": f'{cls.FROM_NAME} <{cls.FROM_EMAIL}>',
                "to": to_emails,
                "subject": subject,
                "text": content,
            },
        )
