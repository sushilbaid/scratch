from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Web App with python Flask!'

print(__name__)
app.run(host='0.0.0.0', port=8000)
