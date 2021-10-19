# React-demo

## Like component

components/standard/like.jsx:

- Create a component using bootstrap icons:
```javascript
import React, { Component } from "react";

class Like extends Component {
  render() {
    let dynamicClass = this.props.liked
      ? "bi bi-heart-fill m-2"
      : "bi bi-heart m-2";
    return <i className={dynamicClass} onClick={this.props.onClick}></i>;
  }
}
export default Like;
```

For this to work we need to: 

- install bootstrap-icons
- import in in the index.js

```
yarn add bootstrap-icons
```

```javascript
import "bootstrap-icons/font/bootstrap-icons.css";
```

- Add the component to the counter:
```javascript
<Like liked={counter.liked} onClick={() => onLike(counter)} />
```

- App component - handleLike:
```javascript
  handleLike = (counter) => {
    FakeService.updateCounter(counter, 0);
    this.retrieveCounters();
  };
```

- Change the fake service updateCounter method:
```javascript
// increment:
//+1 -> increment
//-1 -> decrement
//0 -> change liked attribute
function updateCounter(counter, increment) {
  let counterInDb = counters.find((c) => c.id === counter.id) || {};
  counterInDb.value = counter.value + increment;
  counterInDb.liked = increment ? counterInDb.liked : !counterInDb.liked;
  return counterInDb;
}
```

- Show liked amount in the navbar:

```javascript
<Navbar
  totalCounters={counters.filter((c) => c.value > 0).length}
  totalLikes={counters.filter((c) => c.liked === true).length}
/>
```

```javascript
<span className="badge rounded-pill bg-primary">
  Active counters: {props.totalCounters}
</span>
<span className="badge rounded-pill bg-primary m-2">
  Active counters: {props.totalLikes}
</span>
```