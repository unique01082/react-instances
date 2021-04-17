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
      <button
        onClick={() => {
          const firstCounter = Counter.getInstance('firstCounter')
          firstCounter.increase()
        }}
      >
        ▲ 1st counter
      </button>
      <button
        onClick={() => {
          const firstCounter = Counter.getInstance('firstCounter')
          firstCounter.decrease()
        }}
      >
        ▼ 1st counter
      </button>
      <button
        onClick={() => {
          const secondCounter = Counter.getInstance('secondCounter')
          secondCounter.increase()
        }}
      >
        ▲ 2nd counter
      </button>
      <button
        onClick={() => {
          const secondCounter = Counter.getInstance('secondCounter')
          secondCounter.decrease()
        }}
      >
        ▼ 2nd counter
      </button>
      <button
        onClick={() => {
          const firstCounter = Counter.getInstance('firstCounter')
          const secondCounter = Counter.getInstance('secondCounter')
          firstCounter.increase()
          secondCounter.decrease()
        }}
      >
        ▲ 1st counter &amp; ▼ 2nd counter
      </button>
      <CounterInformation counterName='firstCounter' />
      <CounterInformation counterName='secondCounter' />
    </div>
  )
}
