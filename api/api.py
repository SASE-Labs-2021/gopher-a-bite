from flask import Flask
import json

app = Flask(__name__)
import pandas as pd
df = pd.read_csv("rest_info.csv").dropna()

@app.route('/restaurants/<id>')
def get_rest(id):
    restRowLabels = df.loc[df.id==id].columns # Names/text 
    restRowVals = df.loc[df.id==id].values.flatten() # flatten needed to make [[]] into []
    dictObj = zip(restRowLabels,restRowVals)
    jsonOut = json.dumps(dictObj, sort_keys=True)

@app.route('/ids')
def get_ids():
    col = pd.read_csv("rest_info.csv", usecols = ['id'])
    # ^ not completed