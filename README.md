# React-demo

## http service - deployment to Heroku

- NOTE: This branch works with the counters-server branche "counters-API". Dont use it with the main branche.

- We hardcoded the APIs, so when we have our backend and frontend deployed on Heroku, it does not work... Our web client is still communicating with our localhost.

Add env files: Fill the values according to your project.
- .env.development
```
REACT_APP_API_URL=http://localhost:3001/api/
```

- .env.production
```
REACT_APP_API_URL=https://counters-web-server.herokuapp.com/api/
```

- In the http service we set up axios.defaults.baseURL: When deployed to Heroku, it will read from env.production.
```javascript
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class CountersService {
  getAll() {
    return axios.get("counters");
  }
```