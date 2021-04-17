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
  const count = useObserver(useCounter, counterName, 'count', 0)

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
          const firstCounter = useCounter.getInstance('firstCounter')
          firstCounter.increase()
        }}
      >
        ▲ 1st counter
      </button>
      <button
        onClick={() => {
          const firstCounter = useCounter.getInstance('firstCounter')
          firstCounter.decrease()
        }}
      >
        ▼ 1st counter
      </button>
      <button
        onClick={() => {
          const secondCounter = useCounter.getInstance('secondCounter')
          secondCounter.increase()
        }}
      >
        ▲ 2nd counter
      </button>
      <button
        onClick={() => {
          const secondCounter = useCounter.getInstance('secondCounter')
          secondCounter.decrease()
        }}
      >
        ▼ 2nd counter
      </button>
      <button
        onClick={() => {
          const firstCounter = useCounter.getInstance('firstCounter')
          const secondCounter = useCounter.getInstance('secondCounter')
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
