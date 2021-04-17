/* eslint-disable no-unused-vars */
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
      <button
        onClick={() => {
          const [count, { increase }] = useCounter.getInstance('firstCounter')
          increase()
        }}
      >
        ▲ 1st counter
      </button>
      <button
        onClick={() => {
          const [count, { decrease }] = useCounter.getInstance('firstCounter')
          decrease()
        }}
      >
        ▼ 1st counter
      </button>
      <button
        onClick={() => {
          const [count, { increase }] = useCounter.getInstance('secondCounter')
          increase()
        }}
      >
        ▲ 2nd counter
      </button>
      <button
        onClick={() => {
          const [count, { decrease }] = useCounter.getInstance('secondCounter')
          decrease()
        }}
      >
        ▼ 2nd counter
      </button>
      <button
        onClick={() => {
          const [
            firstCount,
            { increase: increaseFirstCounter }
          ] = useCounter.getInstance('firstCounter')
          const [
            secondCount,
            { decrease: decreaseSecondCounter }
          ] = useCounter.getInstance('secondCounter')
          increaseFirstCounter()
          decreaseSecondCounter()
        }}
      >
        ▲ 1st counter &amp; ▼ 2nd counter
      </button>
      <CounterInformation counterName='firstCounter' />
      <CounterInformation counterName='secondCounter' />
    </div>
  )
}
