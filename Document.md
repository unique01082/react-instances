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

### `withInstanceManage(Component, keyAttribute = 'name'): Component`

**TODO**

```js

```

### `useInstanceManage(Component, name, ...data): void`

**TODO**

```js

```

### `withHookInstanceManage(hook): Proxy`

**TODO**

```js

```

### `withInstancesManager(Component): Component`

```js
import { withInstanceManage } from 'react-instances'

const ManagedInput = withInstanceManage(Input)
// same as
withInstanceManage(Input)
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
import { withInstanceManage } from 'react-instances'

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
