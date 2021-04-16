/* eslint-disable no-unused-vars */
import React from 'react'
import useCounter from './useCounter'

export default function App() {
  const [firstCount] = useCounter('firstCounter')
  const [secondCount] = useCounter('secondCounter')

  return (
    <div>
      <p>
        First counter is <b>{firstCount}</b> and second counter is{' '}
        <b>{secondCount}</b>
      </p>
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
    </div>
  )
}
