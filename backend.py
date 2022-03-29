from flask import Flask, jsonify;
from typing import Optional;

from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import apihandler
import os

app = Flask(__name__, static_folder="../my-app/build", static_url_path="") 

CORS(app)
api = Api(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/name/")
@app.route("/name/<input>", methods=["GET"])
def print_lastname(input: Optional[str]=None):
    if (input == "Lily"):
        output = "Chieng"
    else:
        output = "ERROR: User not found"

    return jsonify(last_name=output)

api.add_resource(apihandler.ApiHandler, '/')

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))