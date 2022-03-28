from flask import Flask, jsonify
app = Flask(__name__, static_folder='./react-flask-app/build', static_url_path='/') # where static files are stored
# static_url_path is seen in front end, static_folder seen in backend 

@app.route('/')
def index():
    return app.send_static_file('index.html') 

def submit_button(button_state: str):
    if button_state == "Off":
        output=  "On"
    else:
        output = "Off"
    return jsonify(button=output)

if __name__ == 'main':
    app.run() 