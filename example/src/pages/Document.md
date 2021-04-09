# Document （っ＾ ▿ ＾） (> under construction

## What are we have?

```js
import {
  symbols,
  withInstancesManager,
  withObservable,
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

### `withInstanceManager(Component, keyAttribute = 'name'): Component`

This HOC only using for `React.Component` or `React.PureComponent`, refer `useInstanceManage` for `Function Component`. Simply wrap your component with `withInstanceManager` and then everything come with `withInstancesManager` are ready for you.

---

If your component is `React.Component`:

- First, you need to prepare your component

```jsx
// Input.js
import { withInstanceManager } from 'react-instances'

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

export default withInstanceManager(Input)
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
import { withInstanceManager } from 'react-instances'

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

export default withInstanceManager(Input)
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
import { withInstanceManager, useInstanceManage } from 'react-instances'

const Input = ({ name }) => {
  const [value, setValue] = useState('')

  useInstanceManage(Input, name, { value, setValue })

  return <input value={value} />
}

export default withInstancesManager(Input)
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

### `withInstancesManager(Component): Component`

```js
import { withInstancesManager } from 'react-instances'

const ManagedInput = withInstancesManager(Input)
// same as
withInstancesManager(Input)
```

This is not a HOC, it is only a decorator function that decorate your "component" with:

- `Symbol(instances): Map`
- `getInstances(): Map`
- `getInstance(key): any`
- `addInstance(key, instance): Map`
- `removeInstance(key): boolean`
- `hasInstance(key): boolean`

## API for instances observe

### `useObserver( observable, name, fields, initialValue, diff = deepDiff): any`

**TODO**

```js

```

### `useObserversNotify(Component, name, ...data): void`

**TODO**

```js

```

### `withHookObserversNotify(hook): Proxy`

**TODO**

```js

```

### `withObservable(Component): Component`

```js
import { withInstanceManager } from 'react-instances'

const ManagedInput = withInstanceManager(Input)
// same as
withInstanceManager(Input)
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

Shortcut function. Decorate of `withInstancesManager` and `withObservable`, manage and sync hook's return values

```js

```
