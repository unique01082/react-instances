# Document （っ＾ ▿ ＾） (> under construction

## What are we have?

```js
import {
  symbols,
  manageInstances,
  observable,
  withInstanceManage,
  useObserver,
  useObserversNotify,
  withHookInstanceManage,
  withHookObserversNotify,
  withHookManage,
  useInstanceManage
} from 'react-instanes'
```

## API for instances manage

### `manageInstances(Component): Component`

Wrap your Component with `manageInstances` is required for manage instances

```js
import { manageInstances } from 'react-instances'

const ManagedInput = manageInstances(Input)
// same as
manageInstances(Input)
```

This is not a HOC, it is only a decorator function that decorate your "component" with:

- `Symbol(instances): Map`
- `getInstances(): Map`
- `getInstance(key): any`
- `addInstance(key, instance): Map`
- `removeInstance(key): boolean`
- `hasInstance(key): boolean`

### `withInstanceManage(Component, keyAttribute = 'name'): Component`

This HOC only using for `React.Component` or `React.PureComponent`, refer `useInstanceManage` for `Function Component`. Simply wrap your component with `withInstanceManage` and then everything come with `manageInstances` are ready for you.

---

If your component is `React.Component`:

- First, you need to prepare your component

```jsx
// Input.js
import { withInstanceManage } from 'react-instances'

class Input extends React.Component {
  state = { value: '' }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    )
  }
}

export default withInstanceManage(Input)
```

- Then, render your component with name

```js
// App.js
import Input from './Input'

export deafult () => <Input name='firstName' />
```

- And then, it's ready to use everywhere in your awesome app

```js
import Input from './Input'

Input.getInstance('firstName').setState({ value: 'John' })
```

---

If your component is `React.PureComponent`, do the same as below example:

- First, you need to prepare your component

```jsx
// Input.js
import { withInstanceManage } from 'react-instances'

class Input extends React.PureComponent {
  state = { value: '' }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    )
  }
}

export default withInstanceManage(Input)
```

- Then, render your component with name

```js
// App.js
import Input from './Input'

export deafult () => <Input name='firstName' />
```

- And then, it's ready to use everywhere in your awesome app

```js
import Input from './Input'

Input.getInstance('firstName').clear()
```

### `useInstanceManage(Component, name, ...data): void`

This custom hook only using for `Function Component`,

```jsx
// Input.js
import { manageInstances, useInstanceManage } from 'react-instances'

const Input = ({ name }) => {
  const [value, setValue] = useState('')

  useInstanceManage(Input, name, { value, setValue })

  return <input value={value} />
}

export default manageInstances(Input)
```

- Then, render your component with name

```js
// App.js
import Input from './Input'

export deafult () => <Input name='firstName' />
```

```jsx
Input.getInstance('firstName').setState({ value: 'Mary' })
```

### `withHookInstanceManage(hook): Proxy`

This HOC only using for `React Hook`,

```js
// useCounter.js
import { withHookInstanceManage } from 'react-instances'

const useCounter = function (initValue) {
  const [count, setCount] = useState(initValue)
  const increase = () => {
    setCount(count + 1)
  }

  return [count, { increase }]
}

export default withHookInstanceManage(useState)
```

```js
// App.js
import useCounter from './useCounter'

export deafult () => {
  const [count] = useCounter("state", 0)

  return <p>{count}</p>
}
```

```js
import useCounter from './useCounter'

const [value, methods] = managedUseCounter.getInstance('state')
methods.increase(value + 1)
```

## API for instances observe

### `useObserver( observable, name, fields, initialValue, diff = deepDiff): any`

Use to observer something that decorated with `observable` and broadcast change with `useObserversNotify`

```js
// Counter.js
import { observable, useObserversNotify } from 'react-instances'

const Counter = (props) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  useObserversNotify(Counter, props.name, { count, increase })

  // ...
}

export default observable(Counter)
```

```js
// App.js
import Counter from './Counter'

export deafult () => {
  return <Counter name="myFirstCounter" />
}
```

```js
const first = useObserver(Counter, 'myFirstCounter', 'count', 0)
```

### `useObserversNotify(Component, name, ...data): void`

Use to broadcast change, first parameter must be wrapped with `observable`

```js
// Counter.js
const Counter = (props) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  useObserversNotify(Counter, props.name, { count, increase })

  // ...
}
```

### `withHookObserversNotify(hook): Proxy`

Use to broadcast change of hook

```js
export default withHookObserversNotify(useState)
```

### `observable(Component): Component`

```js
import { observable } from 'react-instances'

const ManagedCounter = observable(Counter)
// same as
observable(Counter)
```

This is not a HOC, it is only a decorator function that decorate your "component" with:

- `Symbol(observers): Map`
- `getObservers(): Map`
- `hasObserver(key): boolean`
- `getObserver(key): Map`
- `addObserver(key, watcher): string`
- `removeObserver(key, id): boolean`

## Misc

### `symbols: Object`

Object keys:

- INSTANCES
- OBSERVERS

### `withHookManage(hook): void`

Shortcut function. Decorate of `manageInstances` and `observable`, manage and sync hook's return values

```js
export default withHookManage(useState)
```
