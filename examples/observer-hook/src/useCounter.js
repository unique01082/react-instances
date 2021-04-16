import { useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return [count, { increase, decrease }]
}

export default useCounter
