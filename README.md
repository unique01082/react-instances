# react-instances

> The library that manages React components instances

This library is under construction and not stable right now. It is planned to release first stable version on May 17 2021.

[![NPM](https://img.shields.io/npm/v/react-instances.svg)](https://www.npmjs.com/package/react-instances) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-instances
```

## Introduce

```jsx
import { withInstanceManage } from 'react-instances'

class Input extends Component {
  // omitted
}

const ManagedInput = withInstanceManage(Input)
```

```html
<ManagedInput name="myInput" />
```

```javascript
const inputInstance = ManagedInput.getInstance('myInput')
inputInstance.setState({ value: 'test' })
inputInstance.upperCase()
inputInstance.clear()
```

## Demo & Documents

[Demo](https://unique01082.github.io/react-instances/#basic-example)

[API](https://unique01082.github.io/react-instances/#api)

## License

MIT © [unique01082](https://github.com/unique01082)
