# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app
- composing-components-1
- composing-components-2
- composing-components-3
- fake-counters-service
- like-icon-component
- http-service
- http-service-deployment

Functioning demo on Heroku:
https://react-demo-web-dev.herokuapp.com/

Next steps: 

- create a web server in node.js + database (MongoDB or MySQL) to persist the state instead of having the counters array in the memory.

## http service - deployment to Heroku
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