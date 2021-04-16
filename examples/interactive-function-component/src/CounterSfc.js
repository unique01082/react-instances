import React, { useState } from 'react'
import { manageInstances, useInstanceManage } from 'react-instances'

const Counter = ({ name }) => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  useInstanceManage(Counter, name, { count, increase, decrease })

  return (
    <div>
      <button onClick={() => decrease()}>-</button>
      {count}
      <button onClick={() => increase()}>+</button>
    </div>
  )
}

export default manageInstances(Counter)
