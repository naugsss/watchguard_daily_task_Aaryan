from apis.libs.openexchange import OpenExchangeClient

# import requests
#
# APP_ID = "ed3e6783911a4c548f8b62f0dffab6e5"
# ENDPOINT = "https://openexchangerates.org/api/latest.json"
#
# response = requests.get(f"{ENDPOINT}?app_id={APP_ID}")
# exchange_rates = response.json()["rates"]
#
# usd_amount = 1000
# gbp_amount = usd_amount * exchange_rates["GBP"]
#
# print(f"USD {usd_amount} is GBP {gbp_amount}")

APP_ID = "ed3e6783911a4c548f8b62f0dffab6e5"
client = OpenExchangeClient(APP_ID)
usd_amount = 1000
gbp_amount = client.convert(usd_amount, "USD", "GBP")
print(f"USD {usd_amount} is GBP {gbp_amount}")

