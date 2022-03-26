from flask import Flask;
app = Flask(__name__, static_folder='./my-app/build', static_url_path='/')

@app.route("/")
def print_lastname(first_name):
    if(first_name == "Lily"):
        return "Chieng"
    else:
        return "User Not Found"

if __name__ == 'main':
    app.run()


# from flask import Flask
# app = Flask(__name__, static_folder='./my-app/build', static_url_path='/') # where static files are stored
# # static_url_path is seen in front end, static_folder seen in backend 

# @app.route('/')
# def index():
#     return app.send_static_file('index.html') 

# if __name__ == 'main':
#     app.run() 