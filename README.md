## ReactJS / ReactJS-native / actives - web and native counter example
 
### Main Concept
We have the simplest logic for now totally isolated from views.
This logic was re-used in native and web applications. 

It looks like we have:
- `logic` <-[connected]-> `web view` (dom, react-dom)
- `logic` <-[connected]-> `ios view` (ios, react-native)

#### Logic
[Counter/Counter/CounterService.js](Counter/Counter/CounterService.js)
```javascript
export default class CounterService {
    constructor() {
        this.counter = 0;
    }

    up() {
        this.counter++;
    }

    down() {
        this.counter--;
    }


    get() {
        return this.counter;
    }

    toggle() {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        } else {
            this.interval = setInterval(() => this.up(), 100);
        }
    }
}
```

### Main box 
Registers CounterService and creates counter state.

[Counter/Counter/box.js](Counter/Counter/box.js)
```javascript
import {Box} from 'actives';

import CounterService from './CounterService';

let box = new Box;

// logic
box.add('CounterService', () => new CounterService());

// states
box.connect('CounterState', 'CounterService')
    .state(({CounterService}) => {
        return {
            counter: CounterService.get()
        }
    })
    .actions(({CounterService}) => {
        return {
            onUp: () => CounterService.up(),
            onDown: () => CounterService.down(),
            onToggle: () => CounterService.toggle()
        };
    });

export default box;
```

### React-native ios view

[Counter/ios/views/Counter.js](Counter/ios/views/Counter.js)
```jsx
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default () => ({
    counter = 0,
    onUp =() => null,
    onDown =() => null,
    onToggle =() => null,
}) => {
    return <View>
        <Text>Counter: {counter}</Text>

        <TouchableHighlight onPress={onUp}>
            <Text>up</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={onDown}>
            <Text>down</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={onToggle}>
            <Text>toggle</Text>
        </TouchableHighlight>
    </View>;
}
```


### React-native ios box

It re-uses main box and connects ios view to the counter state. CounterState we get from Counter/box.
[Counter/ios/views/box.js](Counter/ios/views/box.js)
```javascript
import box from '../../Counter/box';
import connect from 'actives-react';

import Counter from './Counter';

box.add('Counter', ({CounterState}) => connect(CounterState, Counter()));

export default box;
```

### React-native ios app 
It's runner for ios device. It gets Counter form the box and render (registerComponent).

[Counter/index.ios.js](Counter/index.ios.js)
```jsx
import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import box from './ios/views/box';

let CounterApp = () => {
  return (
      <View style={styles.app}>
        <box.Counter/>
      </View>
  );
};

const styles = StyleSheet.create({
  app: {
    margin: 30
  }
});


AppRegistry.registerComponent('Counter', () => CounterApp);
```

### How to start ios app?
- `cd Counter`
- `npm i`
- `npm run ios` - it should up emulator ios


## Web app

### Counter view
[Counter/web/views/Counter.js](Counter/web/views/Counter.js)
```jsx
import React from 'react';

export default () => ({
    counter = 0,
    onUp =() => null,
    onDown =() => null,
    onToggle =() => null,
}) => {
    return <div>
        <div>Counter: {counter}</div>

        <button onClick={onUp}>
            <span>up</span>
        </button>

        <button onClick={onDown}>
            <span>down</span>
        </button>

        <button onClick={onToggle}>
            <span>toggle</span>
        </button>
    </div>;
}
```


### Web box
It re-uses common box and connects web view. There is re-used __CounterState__, just connected __another view__.

[Counter/web/views/box.js](Counter/web/views/box.js)
```javascript
import box from '../../Counter/box';
import connect from 'actives-react';

import Counter from './Counter';

box.add('Counter', ({CounterState}) => connect(CounterState)(Counter()));

export default box;
```


## Web app
It uses web box and renders component (counter).
[Counter/index.web.js](Counter/index.web.js)

```jsx
import React from 'react';
import {render} from 'react-dom';
import box from './web/views/box';

render(<box.Counter/>, document.getElementById('app'));
```


## How to start web app?
- `npm run web`

## Conclusions
As result we have 2 applications web and mobile (ios native) with same logic.
We just implemented views for the platforms. 

### actives
The main idea of [actives](https://www.npmjs.com/package/actives)










