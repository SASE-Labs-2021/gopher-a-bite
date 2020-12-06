from flask import Flask

app = Flask(__name__)
import pandas as pd
df = pd.read_csv("rest_info.csv").dropna()
@app.route('/restaurants/<id>')
def get_rest(id):
    col = pd.read_csv("rest_info.csv", usecols = ['id'])