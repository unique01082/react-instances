# react-instances

> The library that manages React Component instances

This library is under construction and not stable right now. It is planned to release the first stable version on May 17, 2021 (or maybe sooner).

[![NPM](https://img.shields.io/npm/v/react-instances.svg)](https://www.npmjs.com/package/react-instances) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-instances
```

## Introduce

```js
// anywhere in your awesome application
import Input from './Input'

const myInput = Input.getInstance('myInput')
myInput.setState({ value: 'test' })
myInput.upperCase()
myInput.clear()
```

```jsx
// App.js
import Input from './Input'

export default function App() {
  return <Input name='myInput' />
}
```

```jsx
// Input.js
import { withInstanceManage } from 'react-instances'

class Input extends Component {
  state = { value: '' }

  upperCase = () => {
    this.setState({ value: this.state.value.toUpperCase() })
  }

  clear = () => {
    this.setState({ value: '' })
  }
}

export default withInstanceManage(Input)
```

## Demo & Documents

[API](https://unique01082.github.io/react-instances/#api)

## Communication

[Discussion](https://github.com/unique01082/react-instances/discussions)

[![Discord](https://img.shields.io/discord/832639917485719602?label=%23discussion&logo=discord&logoColor=%23FEF4E8&style=for-the-badge)](https://discord.gg/c7gpgd95BU)

[Contact point](mailto:bao.lq.it@gmail.com)

## Decisions tree

![react-instance-decisions-tree](https://github.com/unique01082/react-instances/raw/master/decisions-tree.png)

### What do you need?

#### I want to interactive with

- My class component

  - withInstanceManage [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/interactive-class-component)

- My function component

  - manageInstances & useInstanceManage [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/interactive-function-component)

- My hook

  - withHookInstanceManage [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/interactive-hook-shortcut)
  - manageInstances & useInstanceManage [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/interactive-hook)

#### I want to watch the changes of

- My class component

  - Not supported yet

- My function component

  - observable & useObserversNotify [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/observer-function-component)

- My hook

  - withHookObserversNotify [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/observer-hook-shortcut)
  - observable & useObserversNotify [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/observer-hook)

#### I want to do both with

- My class component

  - Not supported yet

- My function component

  - manageInstances & useInstancemanage & observable & useObserversNotify [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/manage-function-component)

- My hook

  - withHookManage [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/manage-hook-shortcut)
  - manageInstances & useInstancemanage & observable & useObserversNotify [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/unique01082/react-instances/tree/master/examples/manage-hook)

## License

MIT © [unique01082](https://github.com/unique01082)
