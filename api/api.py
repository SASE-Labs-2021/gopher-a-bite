from flask import Flask, request 
from flask_restful import Resource, Api
import json 
import pandas as pd 
 
app = Flask(__name__)
api = Api(app)

columns = ['rest_id', 'user_id', 'rating', 'review']
REVIEWS = pd.DataFrame(columns=columns)

class Review(Resource):
    def get(self, rest_id):
        print(f'get: {REVIEWS[REVIEWS.rest_id == rest_id]}')
        print(f'rest_id: {rest_id}')
        print(f'{REVIEWS}')
        return REVIEWS[REVIEWS.rest_id == rest_id].to_json(index=False, orient='records')

    def put(self, rest_id):
        user_id = request.form['user_id']
        rating = request.form['rating']
        review = request.form['review']
        new_row = dict(zip(columns, [
            rest_id, user_id, rating, review
        ]))
        REVIEWS.loc[len(REVIEWS)] = new_row
        print(f'put: {REVIEWS}')
        return new_row, 201

api.add_resource(Review, '/review/<rest_id>')

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')