import React, { useState } from 'react'
import {
  manageInstances,
  manageFcInstances,
  observableFc,
  useObserver
} from 'react-instances'

const Counter = (
  { initValue },
  ref,
  { useInstanceManage, useObserversNotify }
) => {
  const [count, setCount] = useState(initValue)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  useInstanceManage({ count, increase, decrease })
  useObserversNotify({ count })

  return (
    <div>
      <button onClick={() => decrease()}>-</button>
      {count}
      <button onClick={() => increase()}>+</button>
    </div>
  )
}

const B = observableFc(manageFcInstances(Counter))
const C = manageInstances(Counter)

window.B = B

function CounterInformation({ counterName }) {
  const count = useObserver(B, counterName, 'count', 0)

  return (
    <p>
      {counterName}: {count}
    </p>
  )
}

const Home = () => {
  return (
    <>
      <B name='test' initValue={3} />
      <CounterInformation counterName='test' />
    </>
  )
}

export default Home
