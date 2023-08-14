import smtplib

smtp_connector = smtplib.SMTP(host="smtp.gmail.com", port=587)
smtp_connector.starttls()
smtp_connector.login('you@gmail.com', 'password')