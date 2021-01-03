from flask import Flask 
import json 
 
app = Flask(__name__) 
import pandas as pd 
df = pd.read_csv("rest_info.csv").dropna() 
 
@app.route('/restaurants/<id>') 
def get_rest(id): 
    restRowLabels = df.loc[df.id==id].columns # Names/text  
    restRowVals = df.loc[df.id==id].values.flatten() # flatten needed to make [[]] into [] 
    dictObj = dict(zip(restRowLabels,restRowVals))
    jsonOut = json.dumps(dictObj, sort_keys=True,ensure_ascii=False)
    return jsonOut
 
@app.route('/ids') 
def get_ids(): 
    restNames = df['restaurant'] # Restaurant Names  
    restVals = df['id']# Restaurant values
    dictObj = dict(zip(restNames,restVals))
    return dictObj