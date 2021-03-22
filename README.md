# GOpher-A-Bite

SASE Labs University of Minnesota project for the 2020-2021 school year: a webapp that recommends local restaurants!

## Guides

- [React and git tutorials](https://github.com/sase-labs-2020/tutorials)

## Running locally

Make sure you have python3 and NodeJS installed.

- [Install python3](https://www.python.org/downloads/)
- If you have python3, `venv` should come with python3
- [Install NodeJS](https://nodejs.org/en/)

```
git clone https://github.com/sase-labs-2021/gopher-a-bite.git
cd api
python3 -m venv env # py -m venv env if you are using Windows
source env/bin/activate
pip install -r requirements.txt
export FLASK_APP=api.py
flask run
cd ..
npm install
npm start

```

### For Windows

#### In One Terminal (Python backend)
 
```
cd %% path to api folder
```

##### To set up virtual environment (first time)

```
py -m venv env
env\Scripts\activate.bat
pip install -r requirements.txt
set FLASK_APP=api.py
flask run
```

##### Every other time after set up (instead of above)

```
env\Scripts\activate.bat
set FLASK_APP=api.py
flask run
```

#### In Second Terminal (Node Frontend, leave other running)

```
cd %% path to repo folder
```

##### For first time

```
npm install
```

##### Every other time

```
npm start

```

## Contributing

### Front-end

- Create a react component under `/src/components/`
- Import that component in `App.js`
- Running `npm start` will open the app in your browser
- All future code changes will automatically update that webpage

### Back-end

- Create a python file under `/api`
- Import that module in `api.py`
- Running `flask run` will start the server
- Try opening `localhost` at the desired API route
