from flask import Flask
from flask import request

app = Flask(__name__)

@app.route("/getData", methods=["GET"])
def hello_world():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    
    return "<p>Hello, World!</p>" + "<p>" + latitude + "</p>"