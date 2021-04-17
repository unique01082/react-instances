import React from 'react'
import { useObserver } from 'react-instances'
import Counter from './CounterSfc'

function CounterInformation({ counterName }) {
  const count = useObserver(Counter, counterName, 'count', 0)

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
