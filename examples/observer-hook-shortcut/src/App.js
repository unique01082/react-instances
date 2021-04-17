import React from 'react'
import { useObserver } from 'react-instances'
import useCounter from './useCounter'

function Counter({ name }) {
  const [count, { increase, decrease }] = useCounter(name)

  return (
    <div>
      <button onClick={() => decrease()}>-</button>
      {count}
      <button onClick={() => increase()}>+</button>
    </div>
  )
}

function CounterInformation({ counterName }) {
  const [count] = useObserver(useCounter, counterName, undefined, [0])

  return (
    <p>
      {counterName}: {count}
    </p>
  )
}

export default function App() {
  return (
    <div>
      <Counter name='firstCounter' />
      <Counter name='secondCounter' />
      <CounterInformation counterName='firstCounter' />
      <CounterInformation counterName='secondCounter' />
    </div>
  )
}
