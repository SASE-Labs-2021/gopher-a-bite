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
flask run
cd ..
npm install
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