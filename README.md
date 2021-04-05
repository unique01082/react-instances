# react-instances

> The library that manages React components instances

[![NPM](https://img.shields.io/npm/v/react-instances.svg)](https://www.npmjs.com/package/react-instances) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-instances
```

## Introduce

```jsx
import { withInstanceManage } from 'react-instances'

// ...

const ManagedInput = withInstanceManage(Input)
```

```jsx
<ManagedInput name='myInput' />
```

```jsx
ManagedInput.getInstance('myInput').setState({ value: 'test' })
ManagedInput.getInstance('myInput').upperCase()
ManagedInput.getInstance('myInput').clear()
```

## Demo & Documents

[Demo](https://unique01082.github.io/react-instances/example)

[API](https://unique01082.github.io/react-instances/api)

## License

MIT © [unique01082](https://github.com/unique01082)
