from libs.mailgun import Mailgun

Mailgun.send_email(to_emails=['test@gmail.com'], 
                    subject='Test e-mail', 
                    content='This is a test mail')