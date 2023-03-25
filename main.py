# This is written for PYTHON 3
# Don't forget to install requests package

import requests
import json
import math

secret_file = open("secret.json")
data = json.load(secret_file)
apiKey = data["api_key"]

latitude = 38.9283
longitude = -77.1753
radius = 1

url = 'http://api.nessieisreal.com/atms?lat={}&lng={}&rad={}&key={}'.format(latitude,longitude,radius,apiKey)

response = requests.get(url)
def calculate_distance(curr_lng,curr_lat):
    return math.sqrt((curr_lng - latitude)**2 + (curr_lat - longitude)**2)

if response.status_code == 200:
    data = response.json()

    closest_distance = calculate_distance(data['data'][0]['geocode']['lat'],data['data'][0]['geocode']['lng'])
    closest_atm = data['data'][0]
    for atm in data['data']:
        current_distance = calculate_distance(atm['geocode']['lat'], atm['geocode']['lng'])
        if current_distance < closest_distance:
            closest_atm = atm

    print('An atm was found!')
    print('Your closest ATM is: ' + closest_atm['name'])
    print('This ATM can be found at: ' + closest_atm['address']['street_number'] + ', ' + closest_atm['address']['street_name'])
    print('Located in: ' + closest_atm['address']['city'] + ', ' + closest_atm['address']['state'] + ' ' + closest_atm['address']['zip'])
else:
    print('There is no bank near you!')
