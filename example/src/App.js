import React from 'react'
import { withInstanceManage } from 'react-instances'

import Input from './Input'

const ManagedInput = withInstanceManage(Input)

const App = () => {
  return (
    <>
      <ManagedInput name='test' />
      <button
        onClick={() =>
          ManagedInput.getInstance('test').setState({ value: 'test' })
        }
      >
        Change value to "test"
      </button>
      <button onClick={() => ManagedInput.getInstance('test').upperCase()}>
        Uppercase
      </button>
      <button onClick={() => ManagedInput.getInstance('test').clear()}>
        Clear value
      </button>
    </>
  )
}

export default App
