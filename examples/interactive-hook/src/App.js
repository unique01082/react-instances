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
    </div>
  )
}
