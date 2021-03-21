from flask import Flask, request
from flask_restful import reqparse, Resource, Api
from datetime import date
import json
import pandas as pd 

app = Flask(__name__)
api = Api(app)
parser = reqparse.RequestParser()
parser.add_argument('restaurant')
parser.add_argument('starRates', type=int)
parser.add_argument('title')
parser.add_argument('desc')
parser.add_argument('author', default='Anonymous')

Reviews = pd.DataFrame(columns=['restaurant', 'starRates', 'title','date','desc','author'])
class RestReviews(Resource): # class IndReviews extending Resource(get & put functions)
    def get(self, rest_id):
        out = Reviews['restaurant'].isin([rest_id]) #filter dataframe
        RestReviews = out.to_json()
        return RestReviews
    def put(self, rest_id):
        args = parser.parse_args()
        rest_id = request.form['restaurant']
        new_review = pd.DataFrame([[rest_id, request.form['starRates'], request.form['title'],
        date.today().strftime("%m/%d/%y"), request.form['desc'], request.form['author']]],
        columns=['restaurant', 'starRates', 'title','date','desc','author']) # restaurant & author may be changed so that it pulls from login
        Reviews = Reviews.concat(new_review, ignore_index=True)
        jsonVer = new_review.to_json()
        return jsonVer, 201

class AllReviews(Resource):
    def get(self):
        FiltReviews = Reviews.sort_values(by='date')
        return FiltReviews.to_json(force_ascii=True)

api.add_resource(AllReviews, '/Reviews')
api.add_resource(RestReviews, '/Reviews/<string:rest_id>') # Sets the URL where this is run

df = pd.read_csv("rest_info.csv").dropna()

@app.route('/restaurants/<id>') 
def get_rest(id):
    restRowLabels = df.loc[df.id==id].columns # Grabs 1st row of titles
    restRowVals = df.loc[df.id==id].values.flatten() # Grabs row w/ wanted restaurant, flatten needed to make [[]] into [] 
    dictObj = dict(zip(restRowLabels,restRowVals)) # Zips together, converts to dictionary
    jsonOut = json.dumps(dictObj, sort_keys=False, ensure_ascii=False) # Converts dictionary to json
    return jsonOut
 
@app.route('/ids') 
def get_ids(): 
    restNames = df['restaurant'] # Restaurant Names  
    restVals = df['id']# Restaurant values
    dictObj = dict(zip(restNames,restVals)) # Zipped & turned to dictionary
    jsonOut = json.dumps(dictObj, sort_keys=True, ensure_ascii=False) # Converts dictionary to json
    return jsonOut