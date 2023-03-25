# This is written for PYTHON 3
# Don't forget to install requests package

import requests
import json

secret_file = open("secret.json")
data = json.load(secret_file)
apiKey = data["api_key"]

customerId = 'your customerId here'

url = 'http://api.reimaginebanking.com/customers/{}/accounts?key={}'.format(customerId,apiKey)
payload = {
  "type": "Savings",
  "nickname": "test",
  "rewards": 10000,
  "balance": 10000,	
}
# Create a Savings Account
response = requests.post( 
	url, 
	data=json.dumps(payload),
	headers={'content-type':'application/json'},
	)

if response.status_code == 201:
	print('account created')