import React, { useState } from 'react'
import {
  manageInstances,
  observable,
  useInstanceManage,
  useObserversNotify
} from 'react-instances'

const Counter = ({ name }) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  useInstanceManage(Counter, name, { count, increase, decrease })
  useObserversNotify(Counter, name, { count, increase, decrease })

  return (
    <div>
      <button onClick={() => decrease()}>-</button>
      {count}
      <button onClick={() => increase()}>+</button>
    </div>
  )
}

manageInstances(Counter)
observable(Counter)
export default Counter
