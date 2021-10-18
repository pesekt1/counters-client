# React-demo

In index.js we create one element:

```javascript
const element = <h1>Hello world!</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
```

Inspect the console:
```
{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
$$typeof: Symbol(react.element)
key: null
props: {children: 'Hello world!'}
ref: null
type: "h1"
```

push to GitHub and check the Heroku deployment.